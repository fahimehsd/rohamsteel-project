import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
  paginate
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-black-500">
        <button
          onClick={() => {
            paginateFront();
          }}
          className="flex items-center p-2 mt-2 text-black-500 cursor-pointer border-[1px] border-black-500 text-md font-medium hover:bg-black-200"
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 7.33333L12.8333 4"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 0.666687L12.8333 4.00002"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="pr-2"> صفحه بعد</span>
        </button>

        <div className="sm:flex hidden mt-2">
          {pageNumbers.map((number) => (
            <button
              onClick={() => {
                paginate(number);
              }}
              className={
                currentPage === number
                  ? "bg-transparent border-red-500 text-red-500 hover:bg-red-200 relative inline-flex items-center px-4 py-2 border text-md font-medium ml-2"
                  : "bg-transparent border-black-500 text-black-500 hover:bg-black-200 relative inline-flex items-center px-4 py-2 border text-md font-medium ml-2"
              }
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            paginateBack();
          }}
          href="#"
          className="flex items-center p-2 mt-2 text-black-500 cursor-pointer border-[1px] border-black-500 text-md font-medium hover:bg-black-200"
        >
          <span className="pl-2">صفحه قبل</span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.1665 4H12.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4L4.49984 7.33333"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.1665 4.00002L4.49984 0.666687"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
