import { toast } from "react-toastify";
import { API } from "../port";
import { addItemToCart } from "../server";

// import img from "";

const CardProduct = ({ name, price, id, description, item }) => {
  const handleAddItemToCart = () => {
    addItemToCart(item, () => toast.success(`${name} added to cart`));
  };

  return (
    <div className="transition-colors ease-in-out rounded-ms flex border-indigo-10 border-2 shadow-sm flex-col h-96 w-full max-w-sm md:mr-3 md:h-72 md:w-72 lg:h-80 lg:w-72 mb-3 bg-white  hover:border-indigo-400">
      <div className="h-4/6 w-full">
        <img
          className="rounded-sm h-full w-full"
          src={`${API}/product/photo/${id}`}
          alt="A image"
        />
      </div>
      <div className=" grid grid-cols-2 grid-rows-2 h-2/6 w-full px-3 py-1">
        {/* Name of the Prodyct */}
        <h1 className="text-sm text-gray-800 col-span-2  truncate ">
          <h1 className="font-thin text-gray-800 col-span-2  truncate ">
            {name}
          </h1>
          {description}
        </h1>
        {/* Price */}
        <h1 className="col-start-1">{`$ ${price}`}</h1>

        {/* // ADD to cart buttom */}
        <button
          onClick={handleAddItemToCart}
          className="ml-10 mb-3 text-center active:bg-indigo-700 bg-indigo-600 text-white hover:bg-indigo-500 rounded-sm"
        >
          ADD to Cart
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
