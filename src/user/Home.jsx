import React, { useEffect, useState } from "react";
import { CardProduct } from "../components";
import { headerContext } from "../context";
import { addItemToCart, getAllProducts, getCategorys } from "../server";

function Home(props) {
  // TODO: optemize code to make reusable functions
  // VARIABLES

  // List of All ther products (to be renderd in card)
  const [productList, setProductList] = useState([]);

  // List of All categorys
  const [categorys, setCategorys] = useState([]);

  // list of shorted Products (By category)
  const [shortedList, SetShortedList] = useState([]);

  // Handling Header Visibility
  const { setHeadHide } = React.useContext(headerContext);
  setHeadHide(false);

  // SET FUNCTIONS

  /* This Method Sets the ProductList  which is renderd as Card
    -> if a shorderd list is given then it sets it as list 
    -> esle sets list parapeter as the List of Products
    (mostly a shorted lis is passed to get shoting functonality)
  */
  const setProducts = (list) => {
    if (!list || list.length === 0) {
      return getAllProducts()
        .then((data) => {
          console.log(data);
          if (!data.error) {
            console.log("All PRODUCTS FOUND SUCESS");
            console.log(data);
            return setProductList([...data]);
          }
          console.log(data);
          return console.log("ERROR::", data.error);
        })
        .catch((e) => console.log(e));
    } else return setProductList([...list]);
  };

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        console.log(data);
        if (!data.error) {
          console.log("All PRODUCTS FOUND SUCESS");
          return setProductList([...data]);
        }
        console.log(data);
        return console.log("ERROR::", data.error);
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    setAllCategorys();
  }, []);

  const setAllCategorys = () =>
    getCategorys()
      .then((res) =>
        !res.error
          ? // ? console.log(res)
            setCategorys([...res])
          : console.error(":: => Cant load categorys")
      )
      .catch((e) => console.log(e));

  // returns a shorted list (By category)
  const shortByCategory = (id) => {
    if (id === "") return setProducts();
    getAllProducts()
      .then((data) => {
        console.log(data);
        if (data.error) {
          return [];
        } else {
          let temp = data.filter((item) => item.category === id);
          setProducts([...temp]);
        }
      })
      .catch((e) => console.log(e));
  };

  // HANDLER FUNCTIONS

  // add item to cart

  return (
    <div className=" flex-1 h-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-none">
      <div className="h-full md:col-span-3 md:row-span-full bg-indigo-50 ">
        <ol className="flex flex-col ml-10 mt-10 flex-1 space-y-3 text-black   font-sans text-sm ">
          <h1 className="text-md font-bold text-gray-400">Filters</h1>

          <button
            className="cursor-pointer text-lg text-left text-gray-600 hover:text-indigo-400 focus:border-none focus:outline-none "
            onClick={() => shortByCategory("")}
          >
            {"All products"}
          </button>
          {categorys.map((item) => {
            return (
              <button
                key={item._id}
                className="cursor-pointer text-lg text-left text-gray-600 hover:text-indigo-400 focus:border-none focus:outline-none "
                onClick={() => shortByCategory(item._id)}
              >
                {item.name}
              </button>
            );
          })}
        </ol>
      </div>
      <div className="overflow-y-auto  w-full h-screen row-span-full col-span-9 flex flex-row flex-wrap p-2 pt-4 pb-10 justify-center items-center md:justify-evenly bg-gray-50">
        {productList.map((product, i) => {
          return (
            <CardProduct
              key={product._id}
              item={product}
              name={product.name}
              price={product.price}
              description={product.description}
              id={product._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
