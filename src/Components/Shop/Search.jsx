import React from "react";

function Search() {
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16">
          <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-pink-500 sm:text-4xl">
            Didn't find product you were looking for?
          </p>

          <form action="/search">
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-pink-300"
              for="search-bar"
            >
              <input
                id="search-bar"
                placeholder="your keyword here"
                name="q"
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                required=""
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-pink-500  text-white fill-white active:scale-95 duration-100 will-change-transform overflow-hidden relative rounded-xl transition-all"
              >
                <div className="flex items-center transition-all opacity-1">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </div>
              </button>
            </label>
          </form>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="pink"></stop>
                <stop offset="1" stop-color="pink"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Search;
