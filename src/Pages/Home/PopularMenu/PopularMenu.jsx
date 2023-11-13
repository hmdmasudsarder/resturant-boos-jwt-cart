import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular')
    //         setMenu(popularItem)
    //     })
    // }, [])
    return (
        <section className="mb-12">
            <SectionsTitle
            heading="From Our Menu"
            subHeading="Popular Item"
            ></SectionsTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className=" text-center ">
                <button className="btn border-0 border-b-4 bg-slate-200 btn-outline  uppercase mt-4">VIEW FULL MENU</button>
            </div>
        </section>
    );
};

export default PopularMenu;