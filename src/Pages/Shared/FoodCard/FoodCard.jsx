const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
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
          <button className="btn border-0 bg-slate-100 border-b-4 border-orange-300 btn-outline uppercase mt-4">
            order now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
