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

const ProductCategories = () => {
  return (
    <div className="flex flex-col">
      {/* Heading */}
      <div className="flex gap-2 pl-2 items-center xl:pb-6 sm:pb-4 pb-3">
        <p className="text-xl font-bold text-green-500 pb-1">|</p>
        <p className="text-black text-[12px] xl:text-[25px] sm:text-[20px] font-medium">
          Shop by Categories
        </p>
      </div>

      {/* Products Container */}
      <div className="px-2">
        <div
          // Base (Mobile): 2 columns
          // Tablet (md): 3 columns
          // Desktop (lg and up): 6 columns
          className="grid grid-cols-2 md:grid-cols-3 
                    gap-x-4 md:gap-x-6  lg:gap-x-8 
                    gap-y-8 md:gap-y-10
                    mx-auto text-black overflow-hidden "
        >
          {categories.map((cat) => (
            // Product Card
            <div
              key={cat.title}
              // Removed lg:w-[23%] and replaced with simple centering
              className="flex flex-col items-center"
            >
              <img
                src={cat.img}
                alt={cat.title}
                // Ensure image scales reasonably across breakpoints
                className="rounded-full w-24 sm:w-32 md:w-36 max-w-full"
              />
              <h2 className="font-medium text-xs xl:text-lg  text-center mt-2">
                {cat.title}
              </h2>
            </div>
          ))}
          {/* NOTE: Placeholders are no longer needed as the Grid layout 
                     handles uniform distribution automatically. */}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
