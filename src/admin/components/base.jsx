import React from "react";
import { Menu } from ".";

const Base = (props) => {
  return (
    <>
      <div className="h-full w-full flex-col md:flex-row absolute flex bg-indigo-300 ">
        <Menu />
        <div className="h-full w-full bg-gray-50">{props.children}</div>
      </div>
    </>
  );
};

export default Base;
