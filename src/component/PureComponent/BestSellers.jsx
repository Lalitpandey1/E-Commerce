import React from "react";
import ProductCardComponent from "../Extra/ProductCardComponent";
import Slider from "react-slick";

const BestSellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    // Default setting for screens larger than the largest defined breakpoint (i.e., above lg)
    slidesToShow: 4,
    slidesToScroll: 1,

    // 👇 ADDITION OF THE RESPONSIVE ARRAY
    responsive: [
      {
        // 1. md to lg (Viewport size up to 1024px)
        breakpoint: 1280, // Applies to screens up to 1024px wide (md to lg)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        // 2. 0 to md (Viewport size up to 768px)
        breakpoint: 1024, // Applies to screens up to 768px wide (0 to md)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        // Optional: Smallest screens (e.g., mobile)
        breakpoint: 768, // Applies to screens up to 480px wide
        settings: {
          slidesToShow: 2, // Showing 1.5 slides is often better for mobile UX
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-6 bg-black">
      <Slider {...settings}>
        <div className="w-[200px] overflow-hidden bg-gray-800">
          <ProductCardComponent />
        </div>
        <div className="w-[230px] overflow-hidden bg-gray-800">
          <ProductCardComponent />
        </div>
        <div className="w-[230px] overflow-hidden bg-gray-800">
          <ProductCardComponent />
        </div>
        <div className="w-[230px] overflow-hidden bg-gray-800">
          <ProductCardComponent />
        </div>
      </Slider>
    </div>
  );
};

export default BestSellers;
