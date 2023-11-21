import { useQuery } from "@tanstack/react-query";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdAdminPanelSettings } from "react-icons/md";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {console.log(res.data)
      if(res.data.modifiedCount > 0){
        refetch()
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.name} has been make admin SuccessFully`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  const handleDelete = (user) =>{
    console.log(user)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
        .then(res => {
          if(res.data.deletedCount > 0){
              Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                refetch()
          }
        })
      }
    });
  }
  return (
    <div>
      <SectionsTitle
        subHeading="HOW MANY"
        heading="MANAGE ALL USERS"
      ></SectionsTitle>
      <div className="flex justify-evenly">
        <h2 className="text-2xl">All Users</h2>
        <h2 className="text-2xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? <> admin
                  <MdAdminPanelSettings className="text-5xl text-blue-600"/></>
                  :
                  <button
                    className="btn btn-lg bg-orange-600"
                    onClick={() => handleMakeAdmin(user)}
                  >
                    <FaUsers className="text-white" />
                  </button>}
                </td>
                <td>
                  <button
                    className="btn btn-lg"
                    onClick={() => handleDelete(user
                      )}
                  >
                    <FaTrashAlt className="text-red-500 white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
