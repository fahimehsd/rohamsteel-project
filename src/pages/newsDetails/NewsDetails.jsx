import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import json from "../../json/db.json";
const NewsDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = pathname.slice(13);
  const allNews = json.news;
  const news = allNews[id - 1];

  return (
    <div className="flex flex-col w-full gap-10 min-h-screen bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <div>
        <div>
          <img
            src={`${news?.image}`}
            alt=""
            className="w-full sm:w-[60rem] sm:h-[40rem] mr-10 mb-10 float-left shadow-md rounded-md flex-[40%] hover:scale-100 duration-300"
          />
        </div>

        <p className="text-2xl sm:text-3xl font-bold leading-relaxed mb-5 text-center">
          {news?.title}
        </p>

        <p className="leading-relaxed text-xl first-letter:pr-8 text-center sm:text-right">
          {news?.desc}
        </p>
      </div>
      <div className="flex flex-col gap-10 my-40">
        <p className="font-bold text-xl">تازه ترین اخبار</p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10  border-t-2 border-red-500 pt-10">
          {allNews.slice(0, 4).map((news) => {
            return (
              <div
                key={news.id}
                className="w-60 flex flex-col items-center"
                onClick={() => navigate(`/newsDetails/${news.id}`)}
              >
                <div className="border p-2 mb-2 border-black-500 rounded-sm shadow-md hover:scale-105 duration-300">
                  <img src={`${news?.image}`} alt="" />
                </div>
                <p className="font-bold text-center">{news?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
