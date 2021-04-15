import React from "react";

const signin = (props) => {
  return (
    <form className="form-body">
      <input
        type="email"
        id=""
        placeholder="Email"
        className="input-text"
      />
      <input
        type="password"
        id=""
        placeholder="Password"
        className="input-text"
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
