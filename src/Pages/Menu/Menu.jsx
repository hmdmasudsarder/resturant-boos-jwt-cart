import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Your Menu"></Cover>
        </div>
    );
};

export default Menu;