import React from "react";
import { toast } from "react-toastify";
import { API } from "../port";
import { removeItem } from "../server";


const CardCart = ({ item }) => {
  const { name, _id, price } = item;

  const handleRemoveItem = () => {
    removeItem(item, () => toast.success("Item removed"));
  };
  return (
    <>
      <li
        className="
          transition-colors ease-in-out
          flex 
          w-full h-32 max-w-xl 
          p-1 lg:p-3 rounded-ms 
          bg-white hover:border-indigo-400
          border-2 border-indigo-10 shadow-sm
        "
      >
        <img
          className="h-24 w-24 mr-3"
          src={`${API}/product/photo/${_id}`}
          alt=""
        />
        <div className=" flex flex-col w-full">
          <div className=" flex flex-row w-full h-full">
            <h1 className="w-full">{name}</h1>
            <h1>{`$ ${price}`}</h1>
          </div>
          <div className="flex">
            <button
              onClick={handleRemoveItem}
              className="py-1 px-3 bg-red-400 hover:bg-red-500 text-white"
            >
              REMOVE
            </button>
            <div className="flex-1"></div>
            <h1 className="py-1">Quantity: 20</h1>
            <button className="ml-4 py-1 px-3 bg-indigo-500 hover:bg-indigo-600 text-white">
              ADD
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
export default CardCart;
