import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import json from "../json/db.json";
const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let { searched } = location.state;

  const filteredData = json.news.filter((news) =>
    (news.title || news.desc).includes(searched)
  );

  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <div>
        {filteredData.length >= 1 ? (
          filteredData.map((news) => (
            <div
              onClick={() => navigate(`/newsDetails/${news.id}`)}
              className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 border-b border-black-500 mb-5"
            >
              <div>
                <img src={news.image} alt="" className="sm:w-60 w-80" />
              </div>
              <div className="sm:w-[50rem] mb-5">
                <p className="font-bold font-2xl sm:font-4xl">{news.title}</p>
                <p>{news.desc.substring(0, 100)}...</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex">
            <p className="font-bold text-2xl sm:text-4xl">
              جست و جو برای {searched} نتیجه ای نداشت
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
