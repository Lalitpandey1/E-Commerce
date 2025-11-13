import React from "react";
import data from "../../assets/BestSellerData.jsx";
import ProductCardComponent from "../Extra/ProductCardComponent.jsx";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Supplements = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-0 py-2 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer bg-green-500  hover:text-green-600  hover:bg-white"
        onClick={onClick}
      >
        <ChevronRight size={18} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-0 py-2 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer bg-green-500  hover:text-green-600  hover:bg-white"
        onClick={onClick}
      >
        <ChevronLeft size={18} />
      </div>
    );
  };

  const customPaging = (i) => (
    // Removed 'absolute left-52'
    <div>
      <div className="w-3 h-3 mx-1 bg-gray-400 rounded-full hover:bg-green-400 transition-colors"></div>
    </div>
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: customPaging,
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
    <div className="w-full">
      <div className="hidden m1:flex w-full relative px-2  m3:px-6 flex-col gap-1 bg-black">
        <div className="">
          {/* title */}
          <div className="flex ml-2 gap-2 items-center">
            <span className="text-green-300 text-xl font-semibold">|</span>
            <span className="font-semibold md:text-lg text-sm">
              Supplements
            </span>
          </div>

          {/* Menu */}
          <div className="flex flex-nowrap mt-2 mb-1 text-[13px] gap-2  ">
            <button>Oils</button>
            <button>Skins&nbsp;&&nbsp;Hairs</button>
            <button>Vitality</button>
            <button className="whitespace-nowrap">Digestion</button>
            <button>Immunity</button>
            <button>Peanut&nbsp;Butter</button>
          </div>
        </div>
        <Slider {...settings}>
          <div className="w-[200px] overflow-hidden bg-gray-800">
            <ProductCardComponent />
          </div>
          <div className="w-[200px] overflow-hidden bg-gray-800">
            <ProductCardComponent />
          </div>
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
      <div className="w-full m1:hidden bg-black">
        {/* Title, Menu, More_Buttom */}
        <div className="">
          {/* title */}
          <div className="flex ml-2 gap-2 items-center">
            <span className="text-green-300 text-xl font-semibold">|</span>
            <span className="font-semibold md:text-lg text-sm">
              Supplements
            </span>
            <button className="ml-auto bg-[#38CB89] rounded-full">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Menu */}
          <div className="flex flex-nowrap my-1 text-[13px] gap-2 ml-2 overflow-scroll scrollbar-hide">
            <button>Oils</button>
            <button>Skins&nbsp;&&nbsp;Hairs</button>
            <button>Vitality</button>
            <button className="whitespace-nowrap">Digestion</button>
            <button>Immunity</button>
            <button>Peanut&nbsp;Butter</button>
          </div>
        </div>

        {/* Products Card */}
        <div className="grid grid-cols-1 m3:grid-cols-2 gap-x-5 my-4 gap-y-8 px-3">
          <div className=" overflow-hidden flex justify-center items-center bg-gray-800">
            <ProductCardComponent />
          </div>
          <div className="overflow-hidden  flex justify-center items-center bg-blue-800">
            <ProductCardComponent />
          </div>
          <div className="overflow-hidden m3:hidden flex justify-center items-center bg-blue-800">
            <ProductCardComponent />
          </div>
          <div className="overflow-hidden m3:hidden flex justify-center items-center bg-blue-800">
            <ProductCardComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplements;
