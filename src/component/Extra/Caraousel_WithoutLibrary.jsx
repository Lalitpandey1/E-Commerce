import React from "react";
import slider1 from "../../assets/Hero_carousel/protienslider1.png";
import slider2 from "../../assets/Hero_carousel/protienslider2.png";
import slider3 from "../../assets/Hero_carousel/protienslider3.png";
import slider4 from "../../assets/Hero_carousel/protienslider4.png";
import Rough from "./Carousel_Support";

const Caraousel = () => {
  const slides = [slider1, slider2, slider3, slider4];
  return (
    <div className="md:max-w-[767px] lg:max-w-[769px] xl:max-w-[960px] 2xl:max-w-[1170px] mx-auto py-[15px] ">
      <Rough autoSlide={true}>
        {slides.map((s, index) => (
          <img src={s} key={index} alt={`slider-${index + 1}`} />
        ))}
      </Rough>
    </div>
  );
};

export default Caraousel;
