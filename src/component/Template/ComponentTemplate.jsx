import React from "react";
// Defines the custom max-widths for Div C.
// These are not breakpoints, but responsive max-width constraints.
const customWidths =
  "sm:max-w-[594px] md:max-w-[652px] lg:max-w-[904px] xl:max-w-[1200px]";

// Custom breakpoint values for readability.
// Note: We use the arbitrary syntax for these since we cannot edit tailwind.config.js.
const M1_PX = "576px"; // 36rem
const M3_PX = "368px"; // 23rem (The effective BASE for the 23px gap)

const ComponentTemplate = ({ children }) => {
  return (
    <div id="DivA" className="w-full bg-blue-500 px-0 md:px-5 py-2 md:py-4 ">
      <div
        id="DivB"
        className={`bg-yellow-400 w-full    px-[13px] m3:px-7 sm:px-[38px] lg:px-10
        
        `}
      >
        <div
          id="DivC"
          className={`
            bg-white 
            ${customWidths} 
            w-full 
            mx-auto 
            shadow-xl  text-white text-center   rounded-xl
            max-w-[1200px]
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ComponentTemplate;
