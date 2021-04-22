import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  deleteProduct,
  getAllProducts,
  isAuthanticated,
  updateProduct,
} from "../server";
import { getCategorys, createProduct } from "../server";

import { CategoryListItem } from "./components";

const ManageProducts = () => {
  const [allValues, setAllValues] = useState([]);
  const [isEditing, setIsEditing] = useState({
    state: false,
    product: {},
  });
  const { user, token } = isAuthanticated();

  // Seting Values
  const setValues = () =>
    getAllProducts()
      .then((data) => {
        return !data.error
          ? setAllValues([...data])
          : console.log("ERROR::", data.error);
      })
      .catch((e) => console.log(e));
  //   const setValues = () =>  getAllProducts => () => {
  //       //
  //   }

  useEffect(setValues, []);

  // HANDLER FUNCTIONS
  const handleEdit = (poduct) => {
    return setIsEditing({ state: true, product: poduct });
  };

  const handleDelete = (id) =>
    deleteProduct(id, user._id, token)
      .then((res) =>
        res.error
          ? toast.error(res.error)
          : toast.success("Product Deleted Sucessfully")
      )
      .catch((e) => console.log("ERROR geting product"));

  return (
    <>
      <div className="flex flex-col flex-1 h-full justify-center items-center bg-gray-200  ">
        <h1 className="m-2 font-semibold text-2xl text-gray-800 ">
          All item List SeT
        </h1>
        <div className="overflow-auto flex flex-col lg:h-4/5 w-1/2 items-center bg-white border-2 border-blue-200 ">
          <ul className="flex-1 font-medium space-y-2 w-full p-2 list-inside list-decimal">
            {allValues.map((item) => (
              <CategoryListItem
                name={item.name}
                id={item._id}
                key={item._id}
                handleDelete={() => handleDelete(item._id)}
                handleEdit={() => handleEdit(item)}
              />
            ))}
          </ul>
        </div>
        {isEditing.state && (
          <UpdateProduct product={isEditing.product} toggle={setIsEditing} />
        )}
      </div>
    </>
  );
};

// UPDATE PRODUCR FORM
const UpdateProduct = ({ product, toggle }) => {
  const [values, setValues] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    stock: product.stock,
    photo: product.photo,
    formData: new FormData(),
  });
  const { name, description, price, category, stock, photo, formData } = values;
  // const { formData } = values;

  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, token } = isAuthanticated();

  const preload = () => {
    getCategorys()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setCategorys(data);
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => preload(), []);

  // HANdle submit
  const handleSubmit = (event) => {
    setLoading(true);
    console.log(formData);
    event.preventDefault();
    updateProduct(product._id, user._id, token, formData)
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          return toast.error("can not save");
        }
        toast.success("Producted Updated succecefully");
      })
      .then(() => toggle({state:false,product:{}}))
      .catch((e) => console.log(e))
      .finally((r) => setLoading(false));
  };

  const handelChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <div className="absolute flex flex-1 flex-col h-full justify-center bg-gray-200  ">
        <form className="flex flex-col lg:flex-row m-0 p-0 space-x-1 self-center form-body lg:w-4/6 lg:h-4/6 bg-gray-50 lg:bg-gray-300">
          <div className=" self-center form-body shadow-none max-w-3xl lg:w-full max-h-full lg:h-full bg-gray-50">
            <label htmlFor="photo" className="text-gray-500 mr-3">
              Chose the photo
            </label>
            <input
              type="file"
              id="photo"
              placeholder="Product Name"
              className="py-2 px-3 outline-none border-2 border-gray-300 bg-gray-100 focus:border-gray-700 "
              // value={name}
              onChange={handelChange("photo")}
            />
          </div>
          <div className="flex flex-col space-y-3 shadow-none items-end max-w-3xl lg:w-full form-body  h-full bg-gray-50">
            <span>
              <label htmlFor="name" className="text-gray-500 mr-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Product Name"
                className="py-2 px-3 outline-none border-2 border-gray-300 bg-gray-100 focus:border-gray-700 "
                value={name}
                onChange={handelChange("name")}
              />
            </span>
            <span>
              <label htmlFor="description" className="text-gray-500 mr-3">
                Name
              </label>
              <input
                type="text"
                id="description"
                placeholder="Product Name"
                className="py-2 px-3 outline-none border-2 border-gray-300 bg-gray-100 focus:border-gray-700 "
                value={description}
                onChange={handelChange("description")}
              />
            </span>
            <span>
              <label htmlFor="price" className="text-gray-500 mr-3">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="ex.$30"
                className="py-2 px-3 outline-none border-2 border-gray-300 bg-gray-100 focus:border-gray-700 "
                value={price}
                onChange={handelChange("price")}
              />
            </span>
            <span>
              <label htmlFor="stock" className="text-gray-500 mr-3">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                placeholder="Product Name"
                className="py-2 px-3 outline-none border-2 border-gray-300 bg-gray-100 focus:border-gray-700 "
                value={stock}
                onChange={handelChange("stock")}
              />
            </span>
            <span>
              <label
                htmlFor="category"
                id="stock"
                className="text-gray-500 mr-3"
              >
                Category
              </label>
              <select
                className="px-2 py-2 border-2  outline-none focus:border-black  border-gray-300 bg-gray-100"
                onChange={handelChange("category")}
              >
                {categorys.map((item, i) => (
                  <option key={i} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </span>
            <input
              type="button"
              value="Update"
              onClick={handleSubmit}
              className="outline-none border-none px-4 py-2 ml-3 text-white bg-indigo-800 shadow-md rounded-sm active:bg-indigo-700 hover:bg-indigo-900 focus:shadow-sm "
            />
          </div>
        </form>
        <button
          className="outline-none border-none px-4 py-2 text-white bg-indigo-800 shadow-md rounded-sm active:bg-indigo-700 hover:bg-indigo-900 focus:shadow-sm "
          onClick={() => toggle({ state: false, product: {} })}
        >
          CANCLE
        </button>
      </div>
    </>
  );
};

export default ManageProducts;
