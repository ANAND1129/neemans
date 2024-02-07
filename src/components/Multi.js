import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css'; // Import the Tailwind CSS styles
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

const Multi = () => {

  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative  ">
    <Slider className='h-500px] ' ref={slider} {...settings}>
      <div className=' w-full h-[400px]'>
        <div className="w-full h-full bg-red-500"></div>
      </div>
      <div className=' w-full h-[400px]'>
        <div className="w-full h-full bg-blue-500"></div>
      </div>
      <div className=' w-full h-[400px]'>
        <div className="w-full h-full bg-green-500"></div>
      </div>
      <div className=' w-full h-[400px]'>
        <div className="w-full h-full bg-yellow-500"></div>
      </div>
    </Slider>
    <button
      className="absolute  right-0 bg-gray-800 text-white p-2 rounded-full"
      onClick={() => slider.current.slickNext()} // Go to the next slide
    >
      <FaGreaterThan />
    </button>
    <button
      className="absolute  right-20 bg-gray-800 text-white p-2 rounded-full"
      onClick={() => slider.current.slickPrev()} // Go to the previous slide
    >
      <FaLessThan />
    </button>
  </div>
  );
};

export default Multi;
