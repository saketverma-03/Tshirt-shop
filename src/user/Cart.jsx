import React, { useEffect, useState } from "react";
import { CardCart } from "../components";

const Cart = () => {
  const [itemList, setItemList] = useState([]);

  /* Checks if cart items exist in storage and returns an result accourdingly */
  const getItemListFromStorage = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
    return [];
  };

  useEffect(() => setItemList(getItemListFromStorage()), []);

  return (
    <div className="overflow-auto flex flex-1 flex-col lg:flex-row">
      {/* LEFT-CART-SECTION */}
      <div className="min-h-1/2 h-auto lg:overflow-auto w-full lg:w-4/6 bg-indigo-100 ">
        {/* Cart List */}
        <ul className=" flex flex-col items-center overflow-auto justify-center my-3 space-y-2">
          {itemList.map((item) => (
            <CardCart key={item._id} item={item} />
          ))}
          {/* <CardCart /> */}
          {/* End of Cart */}
          <div className="p-3 rounded-ms border-indigo-10 border-2 shadow-sm bg-white mb-14">
            <h1>End Of List</h1>
          </div>
        </ul>
      </div>
      {/* RIGHT-SIDE CHECKOUT PANNEL */}
      <div className="min-h-1/2 h-auto w-full lg:w-2/6 bg-gray-100">
        <h1>Lol</h1>
      </div>
    </div>
  );
};

export default Cart;
