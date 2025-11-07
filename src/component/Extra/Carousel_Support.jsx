import React, { useEffect, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
const Rough = ({
  children: slides,
  autoSlide = false,
  autoInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) {
      const slideInterval = setInterval(next, autoInterval);
      return () => {
        clearInterval(slideInterval);
      };
    }
  }, []);
  return (
    <div className="overflow-hidden relative  rounded-3xl">
      {/* Images rendering */}
      <div
        className="flex transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      {/* Navigation Section */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button>
          <RiArrowLeftSLine
            onClick={prev}
            size={25}
            className="rounded-full bg-white/80 shadow text-gray-800 font-extrabold hover:bg-white"
          />
        </button>
        <button>
          <RiArrowRightSLine
            onClick={next}
            size={25}
            className="rounded-full bg-white/80 shadow text-gray-800 font-extrabold hover:bg-white"
          />
        </button>
      </div>

      {/* Dot Sleek */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rough;
