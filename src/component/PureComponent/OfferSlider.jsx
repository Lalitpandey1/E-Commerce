import React, { useRef } from "react"; // 1. Import useRef
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 2. Import icons
import slider1 from "../../assets/Images/Hero_carousel/protienslider1.png";
import slider2 from "../../assets/Images/Hero_carousel/protienslider2.png";
import slider3 from "../../assets/Images/Hero_carousel/protienslider3.png";
import slider4 from "../../assets/Images/Hero_carousel/protienslider4.png";

const OfferSlider = () => {
  // 3. Create refs for your custom buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [slider1, slider2, slider3, slider4];

  return (
    <div className="w-full bg-black">
      <div className="bg-red-500 relative">
        {" "}
        {/* Add 'relative' to position arrows */}
        {/* 4. Custom Prev Button */}
        <div
          ref={prevRef}
          className="absolute hidden md:block left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 
                     cursor-pointer bg-gray-900/50 hover:bg-gray-700/70 text-white rounded-full 
                     transition-colors ml-2"
        >
          <ChevronLeft size={24} />
        </div>
        {/* 5. Custom Next Button */}
        <div
          ref={nextRef}
          className="absolute hidden md:block right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 
                     cursor-pointer bg-gray-900/50 hover:bg-gray-700/70 text-white rounded-full 
                     transition-colors mr-2"
        >
          <ChevronRight size={24} />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          // 6. Pass the refs to the Swiper's navigation prop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          // Note: You must remove the 'navigation' boolean prop

          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg"
          // 7. Add onBeforeInit to ensure refs are set before Swiper initializes
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full aspect-[2.45/1] relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
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
