import React, { useState } from "react";

//otheres
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { authanticate, isAuthanticated, signup } from "../server";
import { Redirect } from "react-router-dom";

const Signin = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    loading: false,
  });

  // redirectinf variable
  const [redirect, setRedirect] = useState(false);

  // FUNCTIONS
  const handelChange = (name) => (event) =>
    setValues({ ...values, [name]: event.target.value });

  // call this if sucessfully loged in
  const onSucess = () => {
    toast.success("Signned in succesfully. Redirecting...");
    return setRedirect(true);
  };

  //Redirecr
  const DidRedirect = () => {
    console.log("I was called");
    if (redirect === true) {
      return isAuthanticated().user.role == 1 ? (
        <Redirect to="/admin" />
      ) : (
        <Redirect to="/" />
      );
    } else return <></>;
  };

  //Submit handler
  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });
    const { email, password } = values;

    //sending data to server
    signup({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
          toast.error(data.error);
        } else {
          authanticate(data, onSucess);
          setRedirect(true);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setValues({ ...values, loading: false });
      });
  };

  return (
    <div className="flex flex-col   w-full h-full justify-center items-center bg-indigo-50 lg:w-1/3">
      <h1 className="mb-10 text-gray-70 text-4xl font-sans font-bold ">
        SignUp
      </h1>
      <form className="form-body rounded-md mb-5 ">
        <input
          type="text"
          id=""
          value={values.name}
          placeholder="Name"
          onChange={handelChange("name")}
          className="input-text mb-4"
        />
        <input
          type="email"
          id=""
          placeholder="Email"
          value={values.email}
          onChange={handelChange("email")}
          className="input-text mb-4"
        />
        <input
          type="password"
          id=""
          value={values.password}
          placeholder="Password"
          onChange={handelChange("password")}
          className="input-text mb-4"
        />
        <input
          type="button"
          value="Login"
          onClick={onSubmit}
          className="outline-none border-none px-4 py-2 text-white bg-blue-500 shadow-xl rounded-md hover:bg-blue-400 focus:shadow-sm "
        />
      </form>
      <p className="my-5">OR</p>
      <button className="border-none focus:outline-none outline-none active:translate-y-1  active:bg-indigo-700 transform-gpu ease-in-out duration-200 hover:-translate-y-  bg-indigo-600 text-white py-2 px-4 rounded-md hover:shadow-xl hover:bg-indigo-900 ">
        Login
      </button>
    </div>
  );
};

export default Signin;
