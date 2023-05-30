import React from "react";
import hero from "../../assets/images/hero/hero3.jpg";
import name from "../../assets/images/logo/name.png";
const Hero = () => {
  return (
    <div className="mt-24 relative">
      <img src={hero} alt="" className=" bg-contain md:w-screen md:h-screen" />
      <div className="w-full h-full bg-[#0000009e]  absolute top-0 text-white">
        <div className=" trapezoid ">
          <img
            src={name}
            alt="شرکت صنایع فولاد رهام پارس"
            className="w-[50%] pt-52 mr-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
