import React from "react";
import { useNavigate } from "react-router-dom";
import json from "../../json/db.json";
const News = () => {
  const navigate = useNavigate();

  const news = json.news;

  return (
    <div
      name="news"
      className=" bg-gradient-to-b from-black-100 via-black-200 to-black-300 w-full text-black md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="flex justify-between items-end p-4 mb-4 font-bold  border-b-4 border-black-500">
          <p className="text-3xl sm:text-4xl">اخبار شرکت</p>
          <p onClick={() => navigate("/news")} className=" cursor-pointer">
            مطالب بیشتر..
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {news.slice(0, 3).map((news) => {
            return (
              <div
                onClick={() => navigate(`/newsDetails/${news.id}`)}
                key={news.id}
                className="flex flex-col items-center shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={`${news?.image}`}
                  alt="news"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className="p-4 flex flex-wrap text-center w-full font-bold duration-200 hover:scale-105">
                  {news?.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
