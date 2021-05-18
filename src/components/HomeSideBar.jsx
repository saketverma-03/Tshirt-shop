import React from "react";
import { getAllProducts, getCategorys } from "../server";

const HomeSideBar = ({ setProducts }) => {
  /* VARIABLES */

  // List of All categorys
  const [allCategory, setAllCategory] = React.useState([]);

  /* SETTER FUNCTIONS */

  // Loads the list of all the categorys at the starting
  React.useEffect(() => {
    getCategorys()
      .then((res) =>
        !res.error
          ? setAllCategory([...res])
          : console.error(":: => Cant load categorys")
      )
      .catch((e) => console.error(e));
  }, []);

  /* HANDLER FUNCTIONS */

  // Shorts the item list by category
  const handleShortByCategory = (id) => {
    if (id === "") return setProducts();
    // gets all the product then filters it by id
    getAllProducts()
      .then((data) => {
        data.error
          ? setProducts([])
          : // filtring
            setProducts([...data.filter((item) => item.category === id)]);
      })
      .catch((e) => console.error(e));
  };

  // UI
  return (
    <>
      {/* <div className="md:h-full sm:py-1 pl-2 flex md:block md:col-span-3 md:row-span-full bg-indigo-50"> */}
      {/* HEADING */}
      <h1 className="text-md font-bold  text-gray-400 mr-4 md:ml-10 md:mt-10">
        Filters
      </h1>
      <ol
        className="overflow-x-scroll md:overscroll-x-none whitespace-nowrap flex-1
                flex flex-row md:flex-col 
                md:ml-10 md:mt-4 
                items-center space-x-3 md:space-y-3 
                text-black font-sans md:text-sm"
      >
        {/* Removes all filter ans Show product button */}
        <button
          className="bg-blue-200 md:bg-transparent
                    px-2 rounded-full md:rounded-none
                    text-lg text-left text-gray-600 hover:text-indigo-400 
                    focus:border-none focus:outline-none"
          onClick={() => handleShortByCategory("")}
        >
          {"All products"}
        </button>
        {/* All others Categorys */}
        {allCategory.map((item) => {
          return (
            <button
              key={item._id}
              onClick={() => handleShortByCategory(item._id)}
              className="bg-blue-200 md:bg-transparent
                    px-2 rounded-full md:rounded-none
                    text-lg text-left text-gray-600 hover:text-indigo-400 
                    focus:border-none focus:outline-none"
            >
              {item.name}
            </button>
          );
        })}
      </ol>
      {/* </div> */}
    </>
  );
};

export default HomeSideBar;
