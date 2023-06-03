import React, { useState } from "react";
import img from "../../assets/images/hero/hero1.jpg";
import Pagination from "../../components/pagination/Pagination";

const Items = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="flex flex-col items-center bg-black-100 rounded-md border-2 border-black-500">
          <p className="p-3 text-2xl font-bold">محصول شماره {item.id}</p>
          <div className=" relative">
            <img
              src={item.img}
              alt=""
              className="w-full rounded-md bg-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black-100 opacity-70">
              <button>مشاهده قیمت</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Products = () => {
  const data = [
    {
      id: 1,
      img: img
    },
    {
      id: 2,
      img: img
    },
    {
      id: 3,
      img: img
    },
    {
      id: 4,
      img: img
    },
    {
      id: 5,
      img: img
    },
    {
      id: 6,
      img: img
    },
    {
      id: 7,
      img: img
    },
    {
      id: 8,
      img: img
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className="w-full h-full bg-gradient-to-b from-black-300 via-black-200 to-black-100 pt-44 p-10 leading-relaxed text-lg">
      <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-black-500">
        محصولات شرکت <span className="text-red-500">رهام</span> پارس
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mt-10">
        <Items data={currentPosts} />
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginateFront={paginateFront}
        paginateBack={paginateBack}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default Products;
