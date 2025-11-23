import React from "react";
import Navbar from "../../PureComponent/Navbar";
import ImageContainer from "./ImageContainer";
import Star from "../../Extra/Star";
import BestSellers from "../../PureComponent/BestSellers";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../PureComponent/Footer";
import { addItem } from "../../../features/cart/cartSlice";
import { selectProductLookup } from "../../../features/cart/productSlice";

const ProductPage = ({ id }) => {
  const productLookup = useSelector(selectProductLookup);
  const productData = productLookup[id];
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addItem(id));
  };

  return (
    <div className="w-full">
      <Navbar />
      <div className="bg-white flex flex-col gap-4 lg:flex-row ">
        <div className="xl:w-[60%] lg:h-140 w-full bg-black overflow-hidden">
          <ImageContainer productId={id || "A001"} />
        </div>

        <div className="pl-3 xl:w-[40%] w-full bg-red-500 rounded-2xl justify-items-start">
          {/* Title */}
          <h1 className="text-2xl my-5 text-left font-semibold">
            {productData.title}
          </h1>

          {/* Rating */}
          <div className="flex gap-1 my-3 items-center">
            <p className="text-xs">4.5</p>
            <Star stars={productData.rating} />
          </div>

          {/* Price */}
          <div className="flex my-10 flex-col">
            <div className="flex my-5 gap-3">
              <p className="text-lg font-extralight">{productData.discount}</p>{" "}
              {/*discount*/}
              <p className="text-xl font-semibold">{productData.Price}</p>{" "}
              {/*Price*/}
            </div>
            <p className="line-through text-left">{productData.totalPrice}</p>{" "}
            {/*totalPrice*/}
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => handleAddtoCart()}
            className="bg-[#38CB89] mx-auto my-10 px-2.5 rounded-xl font-semibold py-1 text-xl"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-green-400 my-5 px-3">
        {/* Product description */}
        <p className="max-w-[20rem] my-3 pl-3 text-left font-semibold text-shadow-md text-gray-700 text-xl">
          Product descriptions
        </p>
        <p className="max-w-[30rem] pl-5 text-left text-gray-900">
          {productData.descriptions}
        </p>
      </div>
      <div className="my-7"></div>
      <BestSellers />
      <Footer />
    </div>
  );
};

export default ProductPage;
