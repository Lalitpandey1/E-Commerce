import React from "react";

import { Heart } from "lucide-react"; // Assuming you still use lucide-react for the Heart icon
import category6 from "../../assets/CategoriesImg/Category6.png"; // Assuming category6 is the correct image source
import Star from "./Star";
const ProductCardComponent = ({ image, rating }) => {
  return (
    // Add 'relative' to the parent container
    <div className="relative flex flex-col items-center px-4 md:px-8 xl:px- justify-center bg-pink-400 rounded-2xl shadow-lg  mx-auto">
      {/* BESTSELLER Tag - Adjusted for positioning */}
      <h2 className="invisible lg:visible self-start font-medium text-[#38CB89] py-1 px-2 z-10">
        BestSeller
      </h2>

      {/* 50% Discount Badge - positioned relative to the parent div */}
      <span className="xl:text-[10px] lg:text-[9px] md:text-[10px] text-[10px] text-white px-0.5 py-1 rounded-full bg-red-600 absolute xl:left-10 md:left-7 left-3 top-10 z-20">
        {/* Higher z-index for visibility */}
        50%
      </span>

      {/* Heart Icon - positioned relative to the parent div */}
      <Heart
        className="absolute xl:right-[13%] lg:top-3 md:right-6 top-4 right-3  lg:w-6 lg:h-6 w-5 h-5 border border-gray-300 bg-white p-0.5 rounded-full z-20 text-gray-700" // Adjusted colors/styles
      />

      {/* Product Image - No need for relative or z-index here if it's the main content */}
      {/* The image should not have relative position or z-index on it as it's not absolutely positioned itself */}
      <img src={category6} alt="title" className=" py-1  max-w-full h-auto " />

      <button className="py-1.5 px-4 my-1 rounded-2xl bg-green-400 text-white font-semibold hover:bg-green-500 transition-colors">
        Add to Cart
      </button>

      {/* Rating and Title */}
      <div className="flex flex-col ml-2 w-full justify-start">
        <Star stars={3.5} />

        {/* Title */}
        <h2 className="text-left text-ellipsis font-medium  xl:text-[14px] text-[12px]">
          Nutrabey Gold 100% Whey Protein Concentrate
        </h2>
      </div>
      {/* Pricing */}
      <div className="flex flex-row gap-2 self-start text-xs">
        <span className="text-[#38CB89] font-semibold">₹2419.00</span>
        <span className="text-[#CB4138] font-semibold">
          ₹<span className="line-through">2419.00</span>
        </span>
      </div>
    </div>
  );
};
export default ProductCardComponent;
