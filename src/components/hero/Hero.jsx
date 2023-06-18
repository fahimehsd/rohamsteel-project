import React from "react";
import hero from "../../assets/images/hero/hero3.jpg";
import name from "../../assets/images/logo/name.png";
const Hero = () => {
  return (
    <div className=" relative">
      <img src={hero} alt="" className=" bg-contain sm:w-screen sm:h-screen" />
      <div className="w-full h-full bg-[#0000009e] absolute top-0 text-white">
        <div className="trapezoid">
          <img
            src={name}
            alt="شرکت صنایع فولاد رهام پارس"
            className="hidden sm:block sm:w-[50%] sm:pt-80 sm:mr-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
