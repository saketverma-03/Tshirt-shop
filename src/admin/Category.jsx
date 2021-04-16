import React from "react";

const Category = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4 h-full m-2">
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
            />
            <input
              type="button"
              value="Add"
              //   onClick={onSubmit}
              className="outline-none border-none px-4 py-2 ml-3 text-white bg-blue-500 shadow-md rounded-md hover:bg-blue-400 focus:shadow-sm "
            />
          </div>
        </form>
        <div className="flex flex-col items-center row-span-2 bg-blue-100 border-2 border-blue-200 rounded-md ">
          <h1 className="m-2 font-semibold text-2xl text-gray-800 ">
            All-CATEGORYs
          </h1>
          <ol className="flex-1 font-medium space-y-2 w-full p-2 list-inside list-decimal">
            <li className="flex items-baseline p-2 bg-blue-200 rounded">
              <span className="flex-1">Summer</span>
              <button className="px-2 py-1 mx-1 bg-red-500 rounded">D</button>
              <button className="px-2 py-1 mx-1 bg-green-500 rounded">Edit</button>
            </li>
            <li className="p-3 bg-blue-200 rounded">Python</li>
            <li className="p-3 bg-blue-200 rounded">Cold</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Category;
