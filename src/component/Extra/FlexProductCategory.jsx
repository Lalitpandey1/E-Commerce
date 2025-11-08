import React from "react";
import ProductCategories from "./PureComponent/ProductCategories";
const customWidths =
  "sm:max-w-[594px] md:max-w-[652px] lg:max-w-[904px] xl:max-w-[1200px]";

const FlexProductCategory = () => {
  return (
    <div
      id="DivA"
      className="w-full bg-blue-500 px-0 md:px-5 md:py-4  overflow-hidden"
    >
      <div
        id="DivB"
        className={`bg-yellow-400 w-full   overflow-hidden px-[13px] m3:px-7 sm:px-[38px] lg:px-10
        
        `}
      >
        <div
          id="DivC"
          className={`
            bg-white 
            ${customWidths} 
            w-full 
            mx-auto 
            shadow-xl  text-white text-center  overflow-hidden rounded-xl
            max-w-[1200px]
          `}
        >
          <ProductCategories />
        </div>
      </div>
    </div>
  );
};

export default FlexProductCategory;
