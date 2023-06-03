import React from "react";
import img from "../../assets/news/news1.jpg";
const News = () => {
  return (
    <div
      name="news"
      className=" bg-gradient-to-b from-black-100 via-black-200 to-black-300 w-full text-black md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="flex justify-between items-end p-4 mb-4 font-bold  border-b-4 border-black-500">
          <p className="text-3xl sm:text-4xl">اخبار شرکت</p>
          <p>مطالب بیشتر..</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={img}
              alt="news"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="p-4 flex flex-wrap">
              <button className="w-full font-bold duration-200 hover:scale-105">
                عزم جدی وزارت صمت برای ایجاد تحول در بخش معدن/ داشتن برنامه‌ریزی
                دقیق برای نقش‌آفرینی فعال و هم‌افزا برای رشد تولید در بخش معدن
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={img}
              alt="news"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="p-4 flex flex-wrap">
              <button className="w-full font-bold duration-200 hover:scale-105">
                عزم جدی وزارت صمت برای ایجاد تحول در بخش معدن/ داشتن برنامه‌ریزی
                دقیق برای نقش‌آفرینی فعال و هم‌افزا برای رشد تولید در بخش معدن
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={img}
              alt="news"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="p-4 flex flex-wrap">
              <button className="w-full font-bold duration-200 hover:scale-105">
                عزم جدی وزارت صمت برای ایجاد تحول در بخش معدن/ داشتن برنامه‌ریزی
                دقیق برای نقش‌آفرینی فعال و هم‌افزا برای رشد تولید در بخش معدن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
