import React from "react";

const signin = (props) => {
  return (
    <form className="flex p-10 flex-col justify-center items-center h-auto w-1/2 max-w-md mt-20 shadow-md rounded-xl bg-gray-50">
      <input
        type="email"
        id=""
        placeholder="Email"
        className=" outline-none w-full mx-10 mb-6 h-10  ring-2 ring-gray-200 rounded-md p-4 text-gray-500 focus:ring-2 focus:ring-blue-300 "
      />
      <input
        type="password"
        id=""
        placeholder="Password"
        className=" outline-none w-full mx-10 mb-6 h-10  ring-2 ring-gray-200 rounded-md p-4 text-gray-500 focus:ring-2 focus:ring-blue-300 "
      />
      <input
        type="button"
        value="Login"
        className="outline-none border-none px-4 py-2 text-white bg-blue-500 shadow-xl rounded-md hover:bg-blue-400 focus:shadow-sm "
      />
    </form>
  );
};

export default signin;
