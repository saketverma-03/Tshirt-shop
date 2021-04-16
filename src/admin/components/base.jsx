import React from "react";
import { Menu } from ".";

const Base = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 h-full w-full absolute  bg-indigo-300 ">
        <Menu />
        <div className="md: overflow-auto  md:col-start-3 md:col-end-13 bg-gray-50">{props.children}</div>
      </div>
    </>
  );
};

export default Base;
