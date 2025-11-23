import React from "react";
import category1 from "../../assets/CategoriesImg/Category1.png";
import category2 from "../../assets/CategoriesImg/Category2.png";
import category3 from "../../assets/CategoriesImg/Category3.png";
import category4 from "../../assets/CategoriesImg/Category4.png";
import category5 from "../../assets/CategoriesImg/Category5.png";
import category6 from "../../assets/CategoriesImg/Category6.png";

const categories = [
  { title: "Health Food", img: category1 },
  { title: "Proteins", img: category2 },
  { title: "Gainers", img: category3 },
  { title: "Pre-Workout", img: category4 },
  { title: "Accessories", img: category5 },
  { title: "Ayurveda", img: category6 },
];
const titleStyle = "text-[6px] xsm:text-[10px] m2:text-4 md:text-sm xl:text-4";
const ProductCategories = () => {
  return (
    <div className="flex flex-col">
      {/* Heading - Adjusted ml-2 to pl-2 for alignment consistency */}
      <div className="flex gap-2 pl-2 items-center xl:pb-6 sm:pb-4 pb-3">
        <p className="text-xl font-bold text-green-500 pb-1">|</p>
        <p className="text-black text-[12px] xl:text-[25px] sm:text-[20px] font-medium">
          Shop by Categories
        </p>
      </div>

      <div className="px-2">
        {" "}
        {/* Added slight horizontal padding for mobile containment */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
                     gap-x-4 md:gap-x-6 lg:gap-x-8 
                     gap-y-8 md:gap-y-10 "
        >
          {categories.map((cat) => (
            // Product Card
            <div
              key={cat.title}
              // Set the fractional width ONLY for the desktop Flex layout
              className="flex my-1 flex-col items-center border border-[#DCDCDC] rounded-lg bg-[#F0F0F0] hover:bg-green-100"
            >
              <img
                src={cat.img}
                alt={cat.title}
                // Ensure image scales reasonably across breakpoints
                className="rounded-full w-24 sm:w-32 md:w-36 lg:w-40 max-w-full my-1"
              />
              <h2
                className={`font-medium my-1 ${titleStyle} text-black text-center mt-2`}
              >
                {cat.title}
              </h2>
            </div>
          ))}
          <div className="hidden lg:block lg:w-[23%] invisible"></div>
          <div className="hidden lg:block lg:w-[23%] invisible"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
