// Pagination.js

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ul className="flex justify-center text-xs font-medium space-x-1 py-10">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center justify-center 
          w-5 h-5 md:w-[100px] md:h-10 border-2 text-white 
          bg-blue-400 border-pink-600
          rounded"
        >
          {/* Previous page icon */}
          Back
        </button>
      </li>

      {/* {[...Array(totalPages).keys()].map((_, index) => {
        const page = index + 1;
        return (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs border border-gray-100 rounded leading-8 ${
                page === currentPage
                  ? "text-white bg-pink-400 border-pink-600"
                  : ""
              }`}
            >
              {page}
            </button>
          </li>
        );
      })} */}

      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center justify-center 
          w-[20px] h-5 md:w-[100px] md:h-10 border-2 text-white bg-blue-400
           border-pink-600 rounded"
        >
          {/* Next page icon */}
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
