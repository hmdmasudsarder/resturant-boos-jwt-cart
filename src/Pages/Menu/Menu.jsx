import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import dessert from '../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import useMenu from "../../hooks/useMenu";
import SectionsTitle from "../../Components/SectionsTitle/SectionsTitle";
import MenuCategory from "./MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Your Menu"></Cover>
            <SectionsTitle heading="Today's offer"
            subHeading="Don't Miss You"/>
            <MenuCategory items={offered}/>
            <MenuCategory items={desserts} title="dessert" img={dessert}/>
            <MenuCategory items={soup} title="soup" img={soupImg}/>
            <MenuCategory items={salad} title="salad" img={saladImg}/>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}/>
        </div>
    );
};

export default Menu;