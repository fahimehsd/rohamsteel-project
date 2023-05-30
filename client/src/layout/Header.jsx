import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineSearch
} from "react-icons/ai";
import logo from "../assets/images/logo/logo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const links = [
    {
      id: 1,
      link: "صفحه نخست"
    },
    {
      id: 2,
      link: "معرفی شرکت"
    },
    {
      id: 3,
      link: "محصولات"
    },
    {
      id: 4,
      link: "اخبار"
    },
    {
      id: 5,
      link: "تماس با ما"
    }
  ];

  return (
    <header
      className={
        color
          ? "flex justify-between items-center w-full px-4 bg-white text-black fixed "
          : "flex justify-between items-center w-full px-4 bg-transparent text-black fixed"
      }
    >
      <div>
        <img
          src={logo}
          alt="شرکت صنایع فولاد رهام پارس"
          className="w-[6rem] sm:w-56 pt-3"
        />
        <div>
          <ul className="hidden md:flex">
            {links.map((link) => (
              <li>
                <button
                  key={link.id}
                  className="px-3 py-3 my-3 cursor-pointer capitalize font-semibold text-gray-600 border-r-[1px] focus:border-b-[1px] focus:border-b-red-500 focus:text-red-500 focus:border-r-red-500 hover:scale-105 duration-200"
                >
                  <Link to={link.link} smooth duration={500}>
                    {link.link}
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-black-600 md:hidden "
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
  // return (
  //   <header className="bg-white w-full p-2 fixed top-0 border-b-2 z-10">
  //     <div className="flex justify-between items-center mb-2">
  //       <img
  //         src={logo}
  //         alt="شرکت صنایع فولاد رهام پارس"
  //         className="w-[6rem] sm:w-56"
  //       />
  //       <div className="min-w-[12rem] bg-gray-200 flex items-center gap-2 p-1 rounded-md text-xs">
  //         <AiOutlineSearch className="text-sm" />
  //         <input
  //           type="text"
  //           placeholder="جست و جو کنید.."
  //           className="bg-transparent"
  //         />
  //       </div>
  //     </div>
  //     <div className="flex justify-between items-center">
  //       <AiOutlineMenu className="text-[#cd151d] text-xl" />
  //       <div>
  //         <div className="flex justify-end items-center gap-1">
  //           <p>02188677045-6</p>
  //           <AiOutlinePhone className="text-[#cd151d] text-sm" />
  //         </div>
  //         <div className="flex items-center gap-1">
  //           <p>info@RohamSteel.com</p>
  //           <AiOutlineMail className="text-[#cd151d] text-sm" />
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
};

export default Header;
