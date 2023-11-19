import {Outlet, useLocation} from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    console.log(location)
    const noFooterHeader = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {noFooterHeader ||<Navbar/>}
            <Outlet></Outlet>
           {noFooterHeader || <Footer/>}
        </div>
    );
};

export default MainLayout;