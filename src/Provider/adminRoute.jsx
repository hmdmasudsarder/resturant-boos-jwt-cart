import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "./AuthProvider";
import { CirclesWithBar } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const adminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading || isAdminLoading){
        return <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
      />
    }
    if(user || isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default adminRoute;