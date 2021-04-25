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
          if (!data.error) {
            console.log("All PRODUCTS FOUND SUCESS");
            return setProductList([...data]);
          }

          return console.log("ERROR::", data.error);
        })
        .catch((e) => console.error(e));
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
      .catch((e) => console.error(e));
  }, []);
  useEffect(() => {
    setAllCategorys();
  }, []);

  const setAllCategorys = () =>
    getCategorys()
      .then((res) =>
        !res.error
          ? setCategorys([...res])
          : console.error(":: => Cant load categorys")
      )
      .catch((e) => console.error(e));

  // returns a shorted list (By category)
  const shortByCategory = (id) => {
    if (id === "") return setProducts();
    getAllProducts()
      .then((data) => {
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

  return (
    <>
      <div className=" flex-1 h-full w-full md:grid md:grid-cols-12 md:grid-rows-none">
        <div className="md:h-full sm:py-1 pl-2 flex md:block md:col-span-3 md:row-span-full bg-indigo-50">
          <h1 className="text-md font-bold  text-gray-400 mr-4 md:ml-10 md:mt-10">
            Filters
          </h1>
          <ol className="overflow-x-scroll md:overscroll-x-none whitespace-nowrap flex flex-row md:flex-col md:align- md:ml-10 md:mt-4 items-center flex-1 space-x-3 md:space-y-3 text-black font-sans md:text-sm">
            <button
              className="cursor-pointer bg-blue-200 px-2 rounded-full md:bg-transparent md:rounded-none text-lg text-left text-gray-600 hover:text-indigo-400 focus:border-none focus:outline-none "
              onClick={() => shortByCategory("")}
            >
              {"All products"}
            </button>
            {categorys.map((item) => {
              return (
                <button
                  key={item._id}
                  className=" bg-blue-200 px-2 rounded-full md:bg-transparent md:rounded-none cursor-pointer text-lg text-left text-gray-600 hover:text-indigo-400 focus:border-none focus:outline-none "
                  onClick={() => shortByCategory(item._id)}
                >
                  {item.name}
                </button>
              );
            })}
          </ol>
        </div>
        <div className="overflow-y-auto  w-full h-screen row-span-full col-span-9 flex flex-row flex-wrap p-2 pt-4 pb-10 justify-center md:justify-evenly bg-gray-50">
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
    </>
  );
}

export default Home;
