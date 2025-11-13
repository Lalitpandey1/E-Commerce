import React from "react";
// Defines the custom max-widths for Div C.
// These are not breakpoints, but responsive max-width constraints.
const customWidths =
  "sm:max-w-[594px] md:max-w-[652px] lg:max-w-[904px] xl:max-w-[1200px]";

const NavBarTemplate = ({ children, color }) => {
  const divA_Color = color || "bg-blue-500";
  const divB_Color = color || "bg-yellow-400";
  const divC_Color = color || "bg-green-500";

  return (
    <div
      id="DivA"
      className={`w-full ${divA_Color} px-0 md:px-5 overflow-hidden`}
    >
      <div
        id="DivB"
        className={`${divB_Color} w-full   overflow-hidden px-[13px] m3:px-7 sm:px-[38px] lg:px-13
        
        `}
      >
        <div
          id="DivC"
          className={`
            ${divC_Color} 
            ${customWidths} 
            w-full 
            mx-auto 
            shadow-xl  text-white text-center  overflow-hidden
            max-w-[1200px]
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavBarTemplate;
