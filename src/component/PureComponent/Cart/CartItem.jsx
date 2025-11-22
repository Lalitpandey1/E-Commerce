import React, { useEffect, useState } from "react";
import data from "../../../assets/BestSellerData";

const CartItem = ({ id, Qty, handleRemoveItem }) => {
  const fetchProduct = (id) => {
    const filteredData = data.find((item) => item.id === id);
    return filteredData;
  };
  let product = fetchProduct(id);

  return (
    <div>
      {/* Product Div */}
      <div className="flex my-3 m3:text-xs m2:text-sm md:text-[16px] gap-1 m2:gap-2 xl:text-lg ">
        {/* Product Image */}
        <img
          src={product.images[0]}
          alt="Product Image for Cart"
          className="max-w-15 m2:max-w-24 m3:max-w-18 max-h-15 m3:max-h-20 m2:max-h-26 shadow-xl rounded-xl"
        />

        {/* Product Info and Action*/}
        <div className="flex m2:flex-row flex-col justify-between w-full bg-white rounded-lg">
          {/* Product Info */}
          <div className="flex flex-col  text-left text-[11px] m3:text-xs m1:text-lg  font-semibold justify-between ">
            <p>{product.title}</p>
            <p className="text-gray-600 font-semibold text-[10px] m2:text-[13px]">
              {product.Bestcategory}
            </p>
            <p className="my-2"></p>
            <p className="text-[8px] m2:text-xs md:text-sm font-semibold">
              Qty: {Qty}
            </p>
          </div>

          {/* Product Action */}
          <div className="flex flex-wrap m2:flex-col justify-between">
            <button className="text-right font-semibold text-gray-800 text-[10px] m2:text-xs md:text-lg">
              ₹{product.Price}
            </button>
            <button
              onClick={() => handleRemoveItem(product.id)}
              className="text-[8px] m2:text-xs md:text-sm text-gray-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
    </div>
  );
};

export default CartItem;
