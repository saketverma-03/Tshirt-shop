import React, { useContext } from "react";
import { headerContext } from "../context";
import Menu from "./Menu";
import { Loading } from ".";

const Base = ({ children }) => {
  const { headhide } = useContext(headerContext);
  return (
    <>
    <div className="overflow-hidden h-screen w-screen" >
      {!headhide && <Menu />}
      <div className="flex h-screen w-screen bg-indigo-100">
        {/* <div className="flex-1 bg-gray-600 " > */}
        {/* <Loading /> */}
        {children}
        {/* </div> */}
      </div>
      </div>
    </>
  );
};

export default Base;
