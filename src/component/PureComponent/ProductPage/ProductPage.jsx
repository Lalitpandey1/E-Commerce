import React from "react";
import Navbar from "../Navbar";
import ImageContainer from "./ImageContainer";
import Star from "../../Extra/Star";
import { Heart } from "lucide-react";
import BestSellers from "../BestSellers";
import TimerOffer from "../TimerOffer";
import Footer from "../Footer";
import data from "../../../assets/BestSellerData";

const ProductPage = ({ id }) => {
  const fetchProduct = (id) => {
    const filteredData = data.find((item) => item.id === id);
    return filteredData;
  };

  const productData = fetchProduct(id);

  return (
    <div className="w-full">
      <Navbar />
      <div className="bg-white flex flex-col gap-4 lg:flex-row ">
        <div className="xl:w-[50%] lg:h-140 w-full bg-black overflow-hidden">
          <ImageContainer productId={id || "D007"} />
        </div>

        <div className="pl-3 xl:w-[45%] w-full bg-red-500 rounded-2xl justify-items-start">
          {/* Title */}
          <h1 className="text-2xl my-5 font-semibold">{productData.title}</h1>

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
          <button className="bg-[#38CB89] mx-auto my-10 px-2.5 rounded-xl font-semibold py-1 text-xl">
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
      <BestSellers />
      <Footer />
    </div>
  );
};

export default ProductPage;
