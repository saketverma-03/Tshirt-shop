import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [menu, setMenu] = useState(true);
  const handleClick = () => {
    let temp = menu;
    setMenu(!temp);
  };
  /*  TODO:
  [-] Remove bug: in md menu is cloased by default 
  [-] Fix mobile view colors
  [-] Add At head user Name and Menu Title may be
  */
  const TabItem = ({ name, to }) => (
    <li className="p-1 text-white w-full text-md mb-3 ">
      <Link
        className="transition duration-300 rounded-md py-2 pr-28 pl-4  w-full  focus:bg-blue-600 focus:shadow-2xl  hover:bg-blue-900 "
        to="#"
      >
        Products
      </Link>
    </li>
  );

  // TODO: animate drom pdown
  return (
    <>
      <div className="flex md:hidden duration-500 justify-center">
        <span className="text-center text-3xl font-mono font-bold text-white">
          AdminPannel
        </span>
        <button className="md:hidden" onClick={handleClick}>
          Ok
        </button>
      </div>
      {menu && (
        <>
          <div className="transfor, duration-500 transition-transform flex  items-center flex-col  h-full md:w-2/12 space-y-6 md:py-2 pt-4 bg-gray-800">
            <ul className=" p-2 content-center font-semibold text-white text-center space-y-2 list-none w-full bg-indigo-300 md:bg-opacity-0">
              <TabItem name="Products" to="/" />
              <TabItem name="Category" to="/" />
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
