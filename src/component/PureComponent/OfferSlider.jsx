import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from "../../assets/Hero_carousel/protienslider1.png";
import slider2 from "../../assets/Hero_carousel/protienslider2.png";
import slider3 from "../../assets/Hero_carousel/protienslider3.png";
import slider4 from "../../assets/Hero_carousel/protienslider4.png";

const OfferSlider = () => {
  const slides = [slider1, slider2, slider3, slider4];
  //
  return (
    <div className="w-full bg-black">
      <div className=" bg-red-500">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg"
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full  aspect-[2.45/1] relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg "
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
