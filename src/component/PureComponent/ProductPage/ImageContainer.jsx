import React, { useState } from "react";
import data from "../../../assets/BestSellerData";
const ImageContainer = ({ productId }) => {
  const [selectImage, setSelectImage] = useState();

  const fetchProduct = (id) => {
    const filteredData = data.find((item) => item.id === id);
    return filteredData.images;
  };

  const handleImage = (selected) => {
    setSelectImage(selected);
  };

  const productImage = fetchProduct(productId);

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full gap-1 h-full">
      {/* Image Bar */}
      <div className="h-full flex flex-row lg:flex-col  items-center min-w-20 lg:w-35 my-3">
        <div className="flex-1 lg:h-full w-full justify-center flex flex-row lg:flex-col m3:gap-1 m2:gap-3 m1:gap-6 lg:gap-2 bg-purple-400 overflow-scroll scrollbar-hide">
          {productImage.map((item, index) => {
            return (
              <img
                onClick={() => handleImage(item)}
                key={index}
                src={item}
                alt={`product image ${index + 1}`}
                // CHANGE 2: Add 'shrink-0' and fixed 'h-20' (or any height you want)
                className="border m3:w-14 m1:w-18 h-20 shrink-0 object-cover border-[#38CB89] rounded-lg cursor-pointer hover:opacity-80"
              />
            );
          })}
        </div>
      </div>

      {/* Selected Image */}
      <div className="flex items-center rounded-xl mx-auto">
        <img
          className="max-h-140 m2:max-w-100 m3:max-w-60 xl:max-w-120 rounded-xl object-cover self-center"
          src={selectImage || productImage[0]}
          alt="Selected product"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
