import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  console.log(items.category)
  return (
    <div className="pt-10">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-14">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to={`/order/${title}`} >
          <button className="btn border-0 border-b-4 border-b-white btn-outline uppercase mt-4">
            order now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
