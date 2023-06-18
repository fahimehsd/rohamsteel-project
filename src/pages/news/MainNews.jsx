import React, { useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import json from "../../json/db.json";
const MainNews = () => {
  const navigate = useNavigate();
  const news = json.news;
  const theLatest = news.slice(-4);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className="flex flex-col sm:flex-row w-full min-h-screen bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <div className="flex flex-col gap-5 sm:w-1/2 w-full">
        <div
          className="relative"
          onClick={() => navigate(`/newsDetails/${theLatest[3].id}`)}
        >
          <img
            src={`${theLatest[3]?.image}`}
            alt=""
            className="w-full h-full bg-contain"
          />
          <div class="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-800 opacity-70 hover:scale-105 duration-300">
            <p class="mt-2 text-sm text-gray-100">{theLatest[3]?.title}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row">
          <div
            className=" relative w-full h-full"
            onClick={() => navigate(`/newsDetails/${theLatest[2].id}`)}
          >
            <img src={`${theLatest[2]?.image}`} alt="" className=" bg-cover" />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-800 opacity-70 hover:scale-105 duration-300">
              <p class="mt-2 text-sm text-gray-100"> {theLatest[2]?.title}</p>
            </div>
          </div>
          <div
            className="relative"
            onClick={() => navigate(`/newsDetails/${theLatest[1].id}`)}
          >
            <img
              src={`${theLatest[1]?.image}`}
              alt=""
              className="w-full h-full bg-contain"
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 bg-black-800 opacity-70 hover:scale-105 duration-300">
              <p class="mt-2 text-sm text-gray-100">{theLatest[1]?.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 sm:mx-10 mt-10 text-center sm:text-right">
        <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-black-500">
          اخبار شرکت <span className="text-red-500">رهام</span> پارس
        </p>
        <div>
          {currentPosts.map((news) => {
            return (
              <div
                key={news.id}
                className="my-10 pb-5 cursor-pointer flex flex-col sm:flex-row items-center gap-5 border-b-2 border-black-500 last-of-type:border-0"
                onClick={() => navigate(`/newsDetails/${news.id}`)}
              >
                <img
                  src={`${news?.image}`}
                  alt=""
                  className="w-60 h-40 hover:scale-105 duration-300"
                />
                <div>
                  <div className="border-b border-dashed border-black-100 pb-3 mb-3">
                    <p className="text-xl sm:text-2xl font-bold inline ">
                      {news?.title}
                    </p>
                  </div>
                  <button className="sm:text-right text-center">
                    {news?.desc.substring(0, 100)}..
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={news.length}
          currentPage={currentPage}
          paginate={paginate}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
        />
      </div>
    </div>
  );
};

export default MainNews;
