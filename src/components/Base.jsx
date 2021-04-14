import React, { useContext } from "react";
import { headerContext } from "../context";
import Menu from "./Menu";

const Base = ({ children }) => {
  const { headhide } = useContext(headerContext);
  return (
    <>
      {!headhide && <Menu />}
      <div className="flex h-screen justify-center items-center  bg-gray-100">
        {children}
      </div>
    </>
  );
};

export default Base;
