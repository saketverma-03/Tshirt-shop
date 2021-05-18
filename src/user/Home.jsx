import React, { useEffect, useState } from "react";
import { CardProduct } from "../components";
import HomeSideBar from "../components/HomeSideBar";
import { headerContext } from "../context";
import { getAllProducts } from "../server";

function Home(props) {
  // TODO: optemize code to make reusable functions

  // List of All ther products (to be renderd in card)
  const [productList, setProductList] = useState([]);

  // #GLOBAL VARIABLw Handling Header Visibility
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

  // gets and sets all product at the load time
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

  // HANDLER FUNCTIONS

  return (
    <>
      <div className=" flex-1 h-full w-full md:grid md:grid-cols-12 md:grid-rows-none">
        {/* Side bar */}
        <div className="md:h-full py-1 pl-2 flex md:block md:col-span-3 md:row-span-full bg-indigo-50">
          <HomeSideBar setProducts={setProducts} />
        </div>
        {/* Body */}
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
