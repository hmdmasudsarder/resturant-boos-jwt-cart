import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import ManageItems from "../Pages/DashBoard/ManageItems/ManegeItems";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "../Provider/adminRoute";
import Payment from "../Pages/DashBoard/Payment/Payment";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp/>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children:[
      // normal routes 
      {
        path: "cart",
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      // admin routes 
      {
        path: 'addItems',
        element: <AdminRoute><AddItems/></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers/></AdminRoute>
      }
    ]
  }
]);
export default Routers;
