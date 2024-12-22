import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handelNav = function () {
    setNav(!nav);
  };
  return (
    <>
      <div className="text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto">
        <h1 className="text-3xl text-[#00df9a] font-bold w-full">React.</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resourses</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handelNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={20} className="mx-2" />
          ) : (
            <AiOutlineMenu size={20} className="mx-2" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed top-0 left-0 w-[60%] bg-[#000300] h-full border-r border-r-gray-900 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-3xl text-[#00df9a] font-bold w-full m-4">
            React.
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-b-gray-600">Home</li>
            <li className="p-4 border-b border-b-gray-600">Company</li>
            <li className="p-4 border-b border-b-gray-600">Resourses</li>
            <li className="p-4 border-b border-b-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
