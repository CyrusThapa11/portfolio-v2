import React from "react";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShapes, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

// BiSolidShapes

const Sidebar = () => {
  return (
    <div className="h-full flex justify-start items-center ">
      <ul className=" border-[1px] max-w-max px-4 py-5  rounded-full min-h-[50%] flex justify-center items-center flex-col gap-3   ">
        <li className="my-5 cursor-pointer relative hover-text after:content-['Home']  ">
          <Link to="/">
            <AiFillHome size={20} />
          </Link>
        </li>

        <li className="my-5 cursor-pointer relative hover-text after:content-['About']  ">
          <Link to="/about">
            <BsFillPersonFill size={20} />
          </Link>
        </li>
        <li className="my-5 cursor-pointer relative hover-text after:content-['Projects']  ">
          <Link to="/projects">
            <FaShapes size={20} />
          </Link>
        </li>

        <li className="my-5 cursor-pointer relative hover-text after:content-['Contact']  ">
          <Link to="/contact">
            <AiOutlineMail size={20} />
          </Link>
        </li>
      </ul>
      {/*<button data-tooltip-target="tooltip-default" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>  */}
    </div>
  );
};

export default Sidebar;
