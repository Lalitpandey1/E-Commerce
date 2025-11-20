import React, { useState } from "react";
import data from "../../../assets/BestSellerData";

const CartItem = ({ id, handleCartValue }) => {
  const [totalValue, setTotalValue] = useState(0);

  const fetchProduct = (id) => {
    const filteredData = data.find((item) => item.id === id);
    return filteredData;
  };
  let product = fetchProduct(id);
  let productQty = 1;

  handleCartValue(totalValue);

  return (
    <div>
      {/* Product Div */}
      <div className="flex my-10 m3:text-xs m2:text-sm md:text-[16px] gap-2 xl:text-lg ">
        {/* Product Image */}
        <img
          src={product.images[0]}
          alt="Product Image for Cart"
          className="max-w-24 max-h-26 shadow-xl rounded-xl"
        />

        {/* Product Info and Action*/}
        <div className="flex justify-between w-full  bg-white rounded-lg">
          {/* Product Info */}
          <div className="flex text-left font-semibold justify-between flex-col ">
            <p>{product.title}</p>
            <p className="text-gray-600 font-semibold text-[13px]">
              {product.Bestcategory}
            </p>
            <p className="my-2"></p>
            <p className="text-sm font-semibold">Qty: {productQty}</p>
          </div>

          {/* Product Action */}
          <div className="flex flex-col justify-between">
            <button className="text-right font-semibold text-gray-800 text-lg">
              {product.Price}
            </button>
            <button className="text-sm text-gray-500">Remove</button>
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
    </div>
  );
};

export default CartItem;
