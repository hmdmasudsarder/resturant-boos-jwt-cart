import { FaTrashAlt } from "react-icons/fa";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce( (total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure()
    const handleDelete = (id) =>{
        console.log(id)
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
              axiosSecure.delete(`/carts/${id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch();
                }
              })
            }
          });
    }
    return (
        <div>
            <SectionsTitle
            subHeading="Excellent Ambience"
            heading="MY BOOKINGS"
            ></SectionsTitle>
            <div className="flex justify-evenly items-center mt-10">
                <h1 className="text-4xl">Total bookings: {cart.length}</h1>
                <h1 className="text-4xl">Total Price: {total}</h1>
                <h1 className="text-4xl btn btn-warning">Pay</h1>
            </div>
            <div className="overflow-x-auto">
  <table className="table w-full mt-10">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Images</th>
        <th>Names</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item, index) => <tr key={item._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
                {item.name}
            </td>
            <td>$: {item.price}</td>
            <th>
              <button className="btn btn-lg" onClick={() => handleDelete(item._id)}>
                <FaTrashAlt className="text-red-500"/>
              </button>
            </th>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;