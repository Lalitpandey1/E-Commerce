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
        <div className="flex flex-row items-center bg-blue-300 gap-2.5  font-extrabold">
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
          <p className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl m2:text-lg text-left font-postnobills font-extrabold ">
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
              size={18}
              id="searchIcon"
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
            <IoBagHandle size={22} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
