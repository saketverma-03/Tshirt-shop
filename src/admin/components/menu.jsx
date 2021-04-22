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
        className="transition duration-300 md:py-2 md:pr-28 md:pl-4  w-full rounded-md focus:bg-blue-600 focus:shadow-2xl hover:bg-blue-900 "
        to={to}
      >
        {name}
      </Link>
    </li>
  );

  // TODO: animate drom pdown
  return (
    <>
      <button
        className="fixed ml-3 mt-3 px-3 py-2 bg-purple-800 text-red-50 rounded-lg"
        onClick={handleClick}
      >
        Ok
      </button>
      {menu && (
        <>
          <div className="md:overflow-hiddenq md:relative md:col-start-1 md:col-end-3 transfor md: duration-500 transition-transform flex  items-center flex-col  h-full  space-y-6 md:py-2 pt-4 bg-gray-800">
            <span className="flex md:hidden  duration-500 justify-center">
              <span className="text-center text-3xl font-mono font-bold text-white">
                AdminPannel
              </span>
            </span>
            <ul className="content-center md:h-full w-full p-2 space-y-2 list-none md:bg-opacity-0 font-semibold text-white text-center">
              <TabItem name="Category" to="/admin/category" />
              <TabItem name="Products" to="/admin/products" />
              <TabItem name="ManageProducts" to="/admin/manageProducts" />
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
