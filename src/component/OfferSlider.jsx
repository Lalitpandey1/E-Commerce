import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from "../assets/Hero_carousel/protienslider1.png";
import slider2 from "../assets/Hero_carousel/protienslider2.png";
import slider3 from "../assets/Hero_carousel/protienslider3.png";
import slider4 from "../assets/Hero_carousel/protienslider4.png";
const OfferSlider = () => {
  const slides = [
    {
      image: slider1,
      //   caption: "Peaceful mountain view at sunrise",
    },
    {
      image: slider2,
      //   caption: "City skyline glowing at night",
    },
    {
      image: slider3,
      //   caption: "Adventure awaits in the desert",
    },
    {
      image: slider4,
      //   caption: "Adventure awaits in the desert",
    },
  ];

  return (
    <div className="w-full h-full bg-black">
      {/* Slider Container */}
      <div className="md:max-w-[767px] lg:max-w-[769px] xl:max-w-[960px] 2xl:max-w-[1170px] mx-auto py-[30px] bg-green-500 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          style={{ borderRadius: "10px" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-[1200px] h-[490px]">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    objectFit: "none",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OfferSlider;
