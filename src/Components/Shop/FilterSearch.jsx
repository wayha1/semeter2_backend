import React from "react";

function Filter() {
  return (
    <>
      <div className="md:flex md:justify-between md:px-28">
        <div>
          <div className="flex max-sm:flex-wrap gap-3 max-sm:justify-center">
            <a
              href="/"
              className="bg-blue-500 hover:bg-blue-500 py-1 px-2 rounded-lg text-md font-bold"
            >
              All
            </a>
            <a
              href="/"
              className="bg-green-200 text-white hover:bg-green-500 py-1 px-2 rounded-lg text-md font-bold"
            >
              Cleansers
            </a>
            <a
              href="/"
              className="bg-yellow-200 text-white hover:bg-yellow-500 py-1 px-2 rounded-lg text-md font-bold"
            >
              Serum
            </a>
            <a
              href="/"
              className="bg-indigo-200 text-white hover:bg-indigo-500 py-1 px-2 rounded-lg text-md font-bold"
            >
              Moisturizers
            </a>
            <a
              href="/"
              className="bg-pink-200 text-white hover:bg-pink-500 py-1 px-2 rounded-lg text-md font-bold"
            >
              Sunscreen
            </a>
            <a
              href="/"
              className="bg-red-200 text-white  hover:bg-red-500 py-1 px-2 rounded-lg text-md font-bold"
            >
              Toners
            </a>
            <a
              href="/"
              className="bg-orange-200 text-white hover:bg-orange-500 py-1 px-2 rounded-lg text-md font-bold"
            >
              Masks
            </a>
          </div>
        </div>
        <div className="w-full max-sm:py-5 max-sm:flex max-sm:justify-center flex justify-end">
          <div className="max-w-xs lg:max-w-2xl">
            <label for="search" className="sr-only">
              Search
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-500">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5"
                  x-description="Heroicon name: mini/magnifying-glass"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                id="search"
                className="w-ful flex justify-center rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-md font-bold"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
