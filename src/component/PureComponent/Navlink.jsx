import React from "react";

const Navlink = () => {
  return (
    <div>
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
  );
};

export default Navlink;
