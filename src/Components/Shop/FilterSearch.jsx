import React from "react";

function Filter() {
  return (
    <>
      <div className="flex justify-between p-10">
        <div>
          <div class="flex flex-wrap gap-2">
            <a
              href="/"
              class="bg-blue-200 hover:bg-blue-300 py-1 px-2 rounded-lg text-sm"
            >
              All
            </a>
            <a
              href="/"
              class="bg-green-200 hover:bg-green-300 py-1 px-2 rounded-lg text-sm"
            >
              Cleansers
            </a>
            <a
              href="/"
              class="bg-yellow-200 hover:bg-yellow-300 py-1 px-2 rounded-lg text-sm"
            >
              Serum
            </a>
            <a
              href="/"
              class="bg-indigo-200 hover:bg-indigo-300 py-1 px-2 rounded-lg text-sm"
            >
              Moisturizers
            </a>
            <a
              href="/"
              class="bg-pink-200 hover:bg-pink-300 py-1 px-2 rounded-lg text-sm"
            >
              Sunscreen
            </a>
            <a
              href="/"
              class="bg-red-500 hover:bg-red-600 py-1 px-2 rounded-lg text-sm"
            >
              Toners
            </a>
            <a
              href="/"
              class="bg-orange-200 hover:bg-orange-300 py-1 px-2 rounded-lg text-sm"
            >
              Masks
            </a>
          </div>
        </div>
        <div>
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">
              Search
            </label>
            <div class="relative text-gray-400 focus-within:text-gray-500">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5"
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
                class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm"
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
