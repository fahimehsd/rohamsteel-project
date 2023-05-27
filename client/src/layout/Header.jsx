import React from "react";
import {
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineSearch
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-white w-full p-2 fixed top-0 border-b-2 h-[6rem] z-10">
      <div className="flex justify-between items-center mb-2">
        <img
          src="images/logo.png"
          alt="Ų´Ų±Ś©ŲŖ ŲµŁ†Ų§ŪŲ¹ ŲŖŁŁ„ŪŲÆŪ ŁŁŁ„Ų§ŲÆ Ų±Ł‡Ų§Ł… Ł¾Ų§Ų±Ų³"
          className="w-[5rem]"
        />
        <div className="min-w-[12rem] bg-gray-200 flex items-center gap-2 p-1 rounded-md text-xs">
          <AiOutlineSearch className="text-sm" />
          <input
            type="text"
            placeholder="Ų¬Ų³ŲŖŲ¬Ł Ś©Ł†ŪŲÆ ..."
            className="bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <AiOutlineMenu className="text-[#cd151d] text-xl" />
        <div>
          <div className="flex justify-end items-center gap-1">
            <p>02188677045-6</p>
            <AiOutlinePhone className="text-[#cd151d] text-sm" />
          </div>
          <div className="flex items-center gap-1">
            <p>info@RohamSteel.com</p>
            <AiOutlineMail className="text-[#cd151d] text-sm" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
