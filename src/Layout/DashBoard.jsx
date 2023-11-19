import { FaCalculator, FaCalendarDay, FaHome, FaShopify, FaShoppingCart, FaWallet} from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-2">
          <li className="text-2xl">
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/dashboard/reservation">
              <FaCalculator></FaCalculator>
              RESERVATION
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/dashboard/wallet">
            <FaWallet />
              PAYMENT
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/dashboard/review">
            <FcCollaboration/>
              Review
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/dashboard/review">
            <FaCalendarDay />
              My ReserVation
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="text-2xl">
            <NavLink to="/">
            <FaHome />
              HOME
            </NavLink>
          </li>
          <li className="text-2xl">
            <NavLink to="/order/salad">
            <FaShopify/>
              ORDER
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
