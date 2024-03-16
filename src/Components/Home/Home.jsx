import React from "react";
import baekhyun2 from "../../asset/beakhyun.png";
function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-[90vh] bg-pink-100">
        <div className="flex justify-between items-center md:px-10 md:space-x-36">
          <div>
            <h1 className="font-bold text-gray-300 text-4xl text-center pt-10 md:text-left md:pl-20 md:pb-7 md:text-7xl">
              <span className="text-pink-400">Discover the Power</span> of
              <br />
              Clean Skincare
            </h1>
            <p className="text-sm flex text-center px-10 py-5 md:text-left md:pl-20 text-gray-600">
              We believe that true beauty starts from within. That's why we
              encourage you to not only nourish your skin from <br />
              the outside, but also prioritize a healthy lifestyle for optimal
              results.
            </p>
            <div className="flex justify-center md:justify-start md:pl-20 md:pt-10">
              <button className="flex rounded-2xl bg-pink-400 p-3 font-semibold text-white hover:bg-pink-500">
                Shop Now
                <div className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={baekhyun2}
              alt="baekhyun photos"
              className="hidden md:flex md:h-5/6 md:pt-10 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
