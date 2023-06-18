import React, { useState } from "react";
import logo from "../assets/images/logo/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone, AiOutlineSearch } from "react-icons/ai";
import { RxEnter } from "react-icons/rx";

const Header = () => {
  const navigate = useNavigate();

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
      link: "صفحه نخست",
      path: "/"
    },
    {
      id: 2,
      link: "معرفی شرکت",
      path: "/intro"
    },
    {
      id: 3,
      link: "محصولات",
      path: "/products"
    },
    {
      id: 4,
      link: "اخبار",
      path: "/news"
    },
    {
      id: 5,
      link: "تماس با ما",
      path: "/contact"
    }
  ];

  return (
    <header
      className={
        color
          ? "flex justify-between py-3 w-full px-6 bg-black-100 text-black fixed z-10 duration-300"
          : "flex justify-between py-3 w-full px-6 bg-transparent text-black fixed z-10 duration-300"
      }
    >
      <div className=" w-full">
        <img
          src={logo}
          alt="شرکت صنایع فولاد رهام پارس"
          className="w-[6rem] sm:w-60"
        />
        <div>
          <div className="hidden sm:flex mt-3">
            {links.map((link) => (
              <Link to={link.path} smooth duration={500}>
                <button
                  key={link.id}
                  className="px-5 py-3 my-3 cursor-pointer capitalize font-semibold focus:border-b-[1px]  focus:text-red-500 focus:border-b-red-500 hover:scale-105 duration-200"
                >
                  {link.link}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className={
            color
              ? "cursor-pointer pr-4 z-10 text-black-500 sm:hidden mt-7 "
              : "cursor-pointer pr-4 z-10 text-black-100 sm:hidden mt-7"
          }
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {nav && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient z-10 text-white">
            {links.map(({ id, link, path }) => (
              <Link
                onClick={() => setNav(!nav)}
                to={path}
                smooth
                duration={500}
              >
                <button
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  {link}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="w-full flex flex-col items-end">
        <div className="w-[9rem] sm:w-[20rem] bg-black-200 flex items-center gap-2 p-1 sm:p-2 rounded-md ">
          <AiOutlineSearch size={25} color="gray" />
          <input
            type="text"
            placeholder="جست و جو کنید.."
            className="bg-transparent placeholder:text-white outline-none text-xs sm:text-md"
          />
        </div>
        <div className="flex justify-end items-center mt-3">
          <div>
            <a
              href="tel:02188677045"
              className="flex justify-end items-center gap-1 text-sm sm:text-lg"
            >
              <p
                className={
                  color
                    ? "text-black-500 duration-300"
                    : "text-black-100 duration-300"
                }
              >
                02188677045-6
              </p>
              <AiOutlinePhone size={20} className="text-[#cd151d] " />
            </a>
            <a
              href="mailto:info@RohamSteel.com+"
              className="flex items-center gap-1 text-sm sm:text-lg"
            >
              <p
                className={
                  color
                    ? "text-black-500 duration-300"
                    : "text-black-100 duration-300"
                }
              >
                info@RohamSteel.com
              </p>
              <AiOutlineMail size={18} className="text-[#cd151d] " />
            </a>
          </div>
          <div
            className="mr-3 text-sm sm:text-lg"
            onClick={() => navigate("/enter")}
          >
            <button
              className={
                color
                  ? "text-black-500 duration-300"
                  : "text-black-200 duration-300"
              }
            >
              <RxEnter
                size={20}
                className={
                  color
                    ? "text-black-500 duration-300"
                    : "text-black-200 duration-300"
                }
              />
              ورود
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
