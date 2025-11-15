/* @ts-nocheck */
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { X } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBagHandle } from "react-icons/io5";
import { flushSync } from "react-dom";
const Navbar = () => {
  const [arrow, setArrow] = useState(false);
  const [drop, setDrop] = useState(false);
  const [Burger, setBurger] = useState(false);

  const handleArrow = () => {
    if (Burger === false) {
      setArrow((arr) => !arr);
    }
  };
  const handleBurger = () => {
    setDrop((drop) => (!drop ? null : drop === false));
    setBurger((burger) => !burger);
  };
  const handleDrop = () => {
    setBurger((burger) => (!burger ? null : burger === false));
    setDrop((drop) => !drop);
  };
  return (
    // Navbar
    <header className="w-full  bg-pink-500 shadow-lg ">
      {/* Navbar Container */}
      <div className=" bg-green-500 flex flex-row items-center justify-between py-3 overflow-hidden">
        {/* title & Hamburger Container */}
        <div className="flex flex-row items-center bg-blue-300 gap-2.5  font-extrabold">
          {/* Hamburger svg*/}
          <a className="sm:hidden " onClick={handleBurger}>
            {Burger ? <X size={22} /> : <GiHamburgerMenu size={20} />}
          </a>

          {/* title */}
          <p className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-xl text-left font-postnobills font-extrabold ">
            EnergizeX
          </p>
        </div>

        {/* NavLink Container */}
        <div className="flex gap-2 md:gap-3 xl:gap-4 lg:text-[17px] md:text-[14px] m2:text-[12px] items-center bg-purple-500">
          {/* Products */}
          <div className="m2:flex items-center hidden" onClick={handleArrow}>
            Products&nbsp;{arrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {/* Contact Us */}
          <div className="hidden m1:block">Contact Us</div>
          {/* SearchBox */}
          <div className="relative items-center">
            <input
              id="inputBox"
              type="text"
              placeholder="Search"
              className={`rounded-lg border border-gray-300 pl-7 w-30 hidden xl:flex focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            <IoSearch
              size={22}
              id="searchIcon"
              onClick={handleDrop}
              className="xl:absolute left-1.5 top-1/5 text-black"
            />
          </div>
          {/* Login */}
          <div className="flex gap-1 items-center">
            <span className="hidden m2:inline">Login</span>
            <CgProfile size={26} />
            {/* xl:26 */}
          </div>
          {/* Shopping */}
          <div>
            <IoBagHandle size={26} />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className={`w-full transition-all duration-500 ease-in-out  xl:hidden flex bg-red-700 ${
          drop ? "max-h-[9vh]" : "max-h-0"
        } `}
      >
        <div className=" flex relative w-full justify-end items-center overflow-hidden">
          <input
            id="inputDropBox"
            type="text"
            placeholder="Search"
            className={` border-gray-200 text-black/75 h-[90%] text-[10px] text-left px-1.5  max-w-[150px] w-[33%] rounded-lg border focus:ring-1 focus:outline-none focus:ring-blue-400`}
          />
          <IoSearch
            size={13}
            id="searchIcon"
            className=" right-1.5 cursor-pointer absolute top-1/9 text-black"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
