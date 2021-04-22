import React, { useEffect, useState } from "react";
import { CardProduct } from "../components";
import { headerContext } from "../context";
import { getAllProducts } from "../server/admin/productApi";

function Home(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [productList, setProductList] = useState([]);
  // setProductList([]);
  console.log("Typeis", typeof productList);
  // const arr = [1];
  const { setHeadHide } = React.useContext(headerContext);
  setHeadHide(false);

  // Set Functions
  const setProducts = () => {
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
  // HandleresFunctions
  return (
    <div className=" flex-1 h-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-none">
      <div className="h-full md:col-span-3 md:row-span-full bg-indigo-50 ">
        <h1 className="text-sm text-gray-600">Filters</h1>

        <ol className="flex flex-col ml-10 mt-10 flex-1 space-y-3 text-black cursor-pointer  font-sans text-sm ">
          <h1 className="text-lg text-gray-600">Category</h1>
          <li className="ml-5 hover:text-blue-600">Summer</li>
          <li className="ml-5 hover:text-blue-600">Winter</li>
          <li className="ml-5 hover:text-blue-600">Code Man</li>
          <li className="ml-5 hover:text-blue-600">Leet code</li>
          <li className="ml-5 hover:text-blue-600">LCO</li>
        </ol>
      </div>
      <div className="overflow-y-auto  w-full h-screen row-span-full col-span-9 flex flex-row flex-wrap p-2 pt-4 pb-10 justify-center items-center md:justify-evenly bg-gray-50">
        {productList.map((product, i) => {
          return (
            <CardProduct
              key={i}
              name={product.name}
              price={product.price}
              id={product._id}
              photo={product.photo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
