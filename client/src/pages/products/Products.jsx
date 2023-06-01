import React from "react";
import img from "../../assets/images/hero/hero1.jpg";
const Products = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-black-500">
        محصولات شرکت <span className="text-red-500">رهام</span> پارس
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-10">
        <div className="flex flex-col items-center bg-black-100 rounded-md border-2 border-black-500">
          <p className="p-3 text-2xl font-bold">محصول شماره 1</p>
          <div className=" relative">
            <img src={img} alt="" className="w-full rounded-md bg-contain" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black-100 opacity-70">
              <button>مشاهده قیمت</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-black-100 rounded-md border-2 border-black-500">
          <p className="p-3 text-2xl font-bold">محصول شماره 2</p>
          <div className=" relative">
            <img src={img} alt="" className="w-full rounded-md bg-contain" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black-100 opacity-70">
              <button>مشاهده قیمت</button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center bg-black-100 rounded-md border-2 border-black-500">
          <p className="p-3 text-2xl font-bold">محصول شماره 3</p>
          <div className=" relative">
            <img src={img} alt="" className="w-full rounded-md bg-contain" />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black-100 opacity-70">
              <button>مشاهده قیمت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
