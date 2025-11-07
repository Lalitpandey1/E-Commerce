/* @ts-nocheck */
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBagHandle } from "react-icons/io5";
const Navbar = () => {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    setArrow((arr) => !arr);
  };
  return (
    // Navbar
    <header className="w-full bg-pink-500 shadow-lg ">
      {/* Navbar Container */}
      <div className=" bg-green-500 flex flex-row items-center justify-between py-3 overflow-hidden">
        {/* title & Hamburger Container */}
        <div className="flex flex-row items-center bg-blue-300 gap-2.5  font-extrabold text-left ">
          {/* Hamburger svg*/}
          <a className="sm:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="15" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </a>
          {/* title */}
          <p className="font-postnobills font-extrabold text-sm m3:text-[18px] m2:text-[20px] m1:text-[24px] md:text-2xl text-left">
            EnergizeX
          </p>
        </div>

        {/* NavLink Container */}
        <div className="flex flex-row overflow-hidden justify-between items-center bg-blue-300 text-white max-w-[28%] m3:max-w-[24%] m3:w-[48%] w-[35%] sm:mr-2 md:mr-0 xsm:mr-0">
          {/* Product Container */}
          <div
            className="m2:flex flex-row items-center hidden"
            onClick={handleArrow}
          >
            Products&nbsp;{arrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <a className="hidden m1:block">Contact&nbsp;Us</a>

          {/* Input Container */}
          <div className="relative  items-center">
            <input
              id="inputBox"
              type="text"
              placeholder="Search"
              className={`rounded-lg border border-gray-300 py-0.5 pl-7 w-30 hidden xl:flex focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            <IoSearch
              size={18}
              id="searchIcon"
              className="xl:absolute left-1.5 top-1/5 text-black"
            />
          </div>

          {/* Login Container */}
          <div className="flex flex-row items-center gap-1">
            <span className="hidden m2:inline">Login</span>
            <CgProfile size={24} />
          </div>
          {/* Bag Icon */}
          <a>
            <IoBagHandle size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
