import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createCategory,
  deleteCategory,
  getCategorys,
  isAuthanticated,
  updateCategory,
} from "../server";
import { CategoryListItem } from "./components";

const Category = () => {
  const [name, setName] = useState("");
  const [allCategorys, setAllCategorys] = useState([]);
  const [isEditing, setIsEditing] = useState({
    isEditing: false,
    id: undefined,
  });

  // auth variables from user
  const { user, token } = isAuthanticated();

  // FUNCTION FROM HERE

  // Force Update the category list
  const setCategorys = () =>
    getCategorys()
      .then((res) =>
        !res.error
          ? // ? console.log(res)
            setAllCategorys([...res])
          : toast.error("Cant load categorys")
      )
      .catch((e) => console.log(e));

  // sets all ther category at start
  useEffect(setCategorys, []);

  // Setting the initial states for All Categorys
  // Handleers for Create New CAtegory
  const handleChange = (event) => setName(event.target.value);
  const handleSubmit = () => {
    // TODO: set loading state
    createCategory(user._id, token, name)
      .then((res) =>
        res.error
          ? toast.error(`Error Whle Saving Category ${res.error}`)
          : toast.success("CategoryCreated Sucessfully")
      )
      .then(() => {
        setName("");
        setCategorys();
      })
      .catch((e) => console.log(e));
  };

  // Handlers for Updating an Existing Category
  const handleUpdate = () => {
    updateCategory(isEditing.id, user._id, token, name)
      .then((res) => {
        if (res.error) {
          return toast.error("Can not save the Category");
        }
        toast.success("Updated category sucessfully");
      })
      .catch((e) => console.log(e));
  };

  const handleDelete = (id) =>
    deleteCategory(id, user._id, token)
      .then((res) =>
        res.error
          ? toast.error(`Error deleting : ${res.error}`)
          : toast.success("Deleted Succesfully")
      )
      .catch((e) => console.log(e));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4 h-full m-2">
        {isEditing.isEditing && (
          <div className="flex justify-center items-center h-full w-full col-span-full row-span-full bg-black bg-opacity-70 absolute">
            <button onClick={() => setIsEditing(false)}> Close</button>
            <form className="relative form-body w-1/2 opacity-100 ">
              <input
                type="text"
                id="name"
                placeholder="category name"
                className="input-text opacity-100"
                value={name}
                onChange={handleChange}
              />
              <input
                type="button"
                value="Save"
                onClick={handleUpdate}
                className="outline-none border-none px-4 py-2 ml-3 text-white bg-blue-500 shadow-md rounded-md hover:bg-blue-400 focus:shadow-sm "
              />
            </form>
          </div>
        )}
        <form className="form-body shadow-none border-2 border-blue-100 ">
          <h1 className="font-semibold text-2xl mb-14 text-gray-600 ">
            Add Category
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="text"
              id="name"
              placeholder="category name"
              className="input-text"
              value={name}
              onChange={handleChange}
            />
            <input
              type="button"
              value="Add"
              onClick={handleSubmit}
              className="outline-none border-none px-4 py-2 ml-3 text-white bg-blue-500 shadow-md rounded-md hover:bg-blue-400 focus:shadow-sm "
            />
          </div>
        </form>
        {/* CATEGORY LIST */}
        <div className=" overflow-auto flex flex-col h-auto items-center row-span-2 bg-white border-2 border-blue-200 ">
          <h1 className="m-2 font-semibold text-2xl text-gray-800 ">
            All-CATEGORYs <button onClick={setCategorys}>refresh</button>
          </h1>
          <ul className="flex-1 font-medium space-y-2 w-full p-2 list-inside list-decimal">
            {allCategorys.map((item, index) => (
              <CategoryListItem
                name={item.name}
                key={index}
                handleEdit={() =>
                  setIsEditing({ isEditing: true, id: item._id })
                }
                handleDelete={() => handleDelete(item._id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
