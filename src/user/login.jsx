import React, { useState } from "react";

//otheres
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { authanticate, isAuthanticated, signin } from "../auth/helper";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  // VARIABLES
  const [values, setValues] = useState({
    email: "admin@gmail.com",
    password: "1234567890",
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
    signin({ email, password })
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
    <>
      {DidRedirect()}
      <form className="form-body ">
        <input
          type="email"
          id=""
          placeholder="Email"
          value={values.email}
          onChange={handelChange("email")}
          className="input-text"
        />
        <input
          type="password"
          id=""
          value={values.password}
          placeholder="Password"
          onChange={handelChange("password")}
          className="input-text"
        />
        <input
          type="button"
          value="Login"
          onClick={onSubmit}
          className="outline-none border-none px-4 py-2 text-white bg-blue-500 shadow-xl rounded-md hover:bg-blue-400 focus:shadow-sm "
        />
      </form>
    </>
  );
};

export default Login;
