import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { isAuthanticated, signout } from "../auth/helper";

const Menu = () => {
  const handleSignout = () => signout(() => <Redirect to="/" />);
  return (
    <>
      <div className="flex bg-blue-500 w-screen py-4 px-2 pr-5 absolute ">
        <TabButton name="Home" to="/" />
        <TabButton name="Cart" to="/" />
        <h1 className="flex-1"></h1>
        {isAuthanticated() ? (
          <a onClick={handleSignout}>
            <TabButton name="SignOut" />
          </a>
        ) : (
          <>
            <TabButton name="Login" to="/Login" />
            <TabButton
              name="SignUp"
              to="/Signup"
              cls="bg-yellow-300 text-gray-800 bg-opacity-95 "
            />
          </>
        )}
      </div>
    </>
  );
};

const TabButton = ({ name, to, cls, ...rest }) => (
  <Link className="nav-btn" to={to}>
    <h1
      className={`transition  rounded-md mx-1 p-2 text-gray-50 hover:text-gray-900 hover:bg-blue-200  ${cls}  `}
    >
      {name}
    </h1>
  </Link>
);

export default withRouter(Menu);
