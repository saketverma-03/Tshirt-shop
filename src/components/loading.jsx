import React from "react";

function loading(props) {
  return (
    <div className="absolute flex justify-center items-center ">
      <div className="anim2 rounded-full h-5 w-5 bg-indigo-500 "></div>
      <div className="anim2 rounded-full h-5 w-5 bg-red-500 "></div>
      <div className="anim2 rounded-full h-5 w-5 bg-yellow-500 "></div>
    </div>
  );
}

export default loading;
