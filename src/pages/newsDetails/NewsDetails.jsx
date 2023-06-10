import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewsDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = pathname.slice(13);

  const [news, setNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/news/${id}?populate=img`)
      .then((res) => setNews(res.data.data));
    axios
      .get(`http://localhost:1337/api/news?populate=img`)
      .then((res) => setAllNews(res.data.data));
  }, [id]);

  return (
    <div className="flex flex-col w-full gap-10 min-h-screen bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <div>
        <div className="">
          <img
            src={`http://localhost:1337${news?.attributes?.img?.data?.attributes?.formats?.thumbnail?.url}`}
            alt=""
            className="w-[60rem] h-[40rem] mr-10 mb-10 float-left shadow-md rounded-md flex-[40%] hover:scale-100 duration-300"
          />
        </div>
        <p className=" text-3xl font-bold leading-relaxed mb-5 text-center">
          {news?.attributes?.title}
        </p>
        <p className="leading-relaxed text-xl first-letter:pr-8">
          {news?.attributes?.desc}
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <p className="font-bold text-xl">تازه ترین اخبار</p>
        <div className="flex gap-10  border-t-2 border-red-500 pt-10">
          {allNews.slice(0, 4).map((news) => {
            return (
              <div
                key={news.id}
                className="w-60 flex flex-col items-center"
                onClick={() => navigate(`/newsDetails/${news.id}`)}
              >
                <div className="border p-2 mb-2 border-black-500 rounded-sm shadow-md hover:scale-105 duration-300">
                  <img
                    src={`http://localhost:1337${news?.attributes?.img?.data?.attributes?.formats?.thumbnail?.url}`}
                    alt=""
                  />
                </div>
                <p className="font-bold text-center">
                  {news?.attributes?.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
