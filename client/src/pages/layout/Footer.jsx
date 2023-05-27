import React from "react";
import logo from "../../assets/logo1.png";
import name from "../../assets/name.png";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sm:max-w-full flex flex-col items-center justify-center gap-20 rounded-t-3xl p-5 bg-black-100 md:flex-row">
      <div className="w-full flex flex-col items-center">
        <div>
          <img src={logo} alt="" />
          <img src={name} alt="" />
        </div>
        <div className="w-40 mt-10 border-t-2 border-red-500 pt-4">
          <p className="font-bold">نشانی:</p>
          <p>
            تهران، خیابان ولیعصر بالاتر از میرداماد خیابان دستگردی پلاک ۳۶۴ طبقه
            ۳ واحد ۷
          </p>
          <p className="font-bold">کدپستی:</p>
          <p>۱۹۶۸۷۱۵۴۷</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center gap-5 border-y-2  border-red-500 h-24">
          <a href="tel:02188677045">
            <AiOutlinePhone className="w-10 h-10" />
          </a>
          <a href="mailto:info@rohamsteel.com">
            <AiOutlineMail className="w-10 h-10" />
          </a>
          <a href="https://t.me">
            <FaTelegram className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com">
            <AiOutlineLinkedin className="w-10 h-10" />
          </a>
          <a href="https://www.instagram.com">
            <AiOutlineInstagram className="w-10 h-10" />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center text-center">
        <div>
          <p>نظرات خود را با ما در میان بگذارید</p>
          <form
            action="https://getform.io/"
            method="POST"
            className="flex flex-col mt-3"
          >
            <input
              type="text"
              name="name"
              placeholder="نام خود را وارد کنید.."
              className="p-2 bg-transparent border-[1px] border-black-500 rounded-md text-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="ایمیل حود را وارد کنید.."
              className="my-4 p-2 bg-transparent border-[1px] border-black-500 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="نظرات خود را بنویسید.."
              className="p-2 bg-transparent border-[1px] border-black-500 rounded-md text-black focus:outline-none"
            ></textarea>
            <button className="text-black border-[1px] border-red-500 bg-gradient-to-b from-red-200 to-red-500 px-6 py-3 my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              ارسال نظر شما
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
