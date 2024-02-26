import React from "react";

const Paginate = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const visiblePages = pageNumbers.slice(
    Math.max(currentPage - 2, 0),
    Math.min(currentPage + 5, totalPages)
  );

  return (
    <nav className="w-full my-4 flex items-center justify-center">
      <ul className="flex items-center -space-x-px h-12 text-base w-full">
        <li>
          <div
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-black bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 e"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {/* <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg> */}
            <span className="text-[14px] font-semibold">Previous</span>
          </div>
        </li>

        {visiblePages.map((pageNumber) => (
          <li key={pageNumber}>
            <div
              className={`flex text-[15px] font-semibold items-center cursor-pointer justify-center px-4 h-10 leading-tight ${
                pageNumber === currentPage
                  ? "text-white bg-[#ff6859] border border-gray-300 hover:bg-red-500  "
                  : "text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-black "
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </div>
          </li>
        ))}

        <li>
          <div
            className="flex items-center justify-center px-4 h-10 leading-tight text-black bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="text-[14px] font-semibold">Next</span>
            {/* <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg> */}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
