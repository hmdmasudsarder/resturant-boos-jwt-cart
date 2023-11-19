import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import {useContext} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const [, refecth] = useCart();
    const {name, image, price, recipe, _id} = item;
    const handleAddToCart = () => {
      if(user && user.email){
        // send dta 
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          price,
          image
        }
        axiosSecure.post('/carts', cartItem)
        .then(res => {console.log(res.data)
        if(res.data.acknowledged){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} Your Food added Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          refecth();
        }
        })
      }
      else{
        Swal.fire({
          title: "You Are Not Logged Login it",
          text: "Please Login To the Add To the Cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Please Please Login Now PLease"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <p className="absolute right-12 top-14 px-3 rounder-md bg-slate-700 text-white">${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
          <button onClick={handleAddToCart} className="btn border-0 bg-slate-100 border-b-4 border-orange-300 btn-outline uppercase mt-4">
            order now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
