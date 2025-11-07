import React from "react";
import OfferSlider from "./PureComponent/OfferSlider";
import Navbar from "./PureComponent/Navbar";
// Defines the custom max-widths for Div C.
// These are not breakpoints, but responsive max-width constraints.
const customWidths =
  "sm:max-w-[594px] md:max-w-[652px] lg:max-w-[904px] xl:max-w-[1200px]";

const FlexNavbar = () => {
  return (
    <div id="DivA" className="w-full bg-blue-500 px-0 md:px-5 overflow-hidden">
      <div
        id="DivB"
        className={`bg-yellow-400 w-full   overflow-hidden px-[13px] m3:px-7 sm:px-[38px] lg:px-10
        
        `}
      >
        <div
          id="DivC"
          className={`
            bg-green-500 
            ${customWidths} 
            w-full 
            mx-auto 
            shadow-xl  text-white text-center  overflow-hidden
            max-w-[1200px]
          `}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default FlexNavbar;
