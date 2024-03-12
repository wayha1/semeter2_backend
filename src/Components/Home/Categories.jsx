import React from "react";
import cream from "../../asset/cream.png";
import foam from "../../asset/foam.png";
import lotion from "../../asset/lotion.png";
import makeup from "../../asset/makeup.png";
import moiturizer from "../../asset/moiturizer.png";
import serum from "../../asset/serum.png";
import sunscreen from "../../asset/sunscreen.png";

function Categories() {
  return (
    <>
      <div>
        <div className="bg-white pb-20">
          <div className="text-center pt-10 ">
            <h1 className="font-bold text-4xl pb-4">Categories</h1>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-16 sm:gap-8 pt-10 sm:pt-12">
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                  <img
                    src={moiturizer}
                    className="text-gray-500 w-1/2 h-1/2"
                    alt="Import icon"
                  ></img>
                </div>
                <p className="pt-2 text-md font-semibold">Moiturizer</p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                  <img
                    src={foam}
                    className="text-gray-500 w-1/2 h-1/2"
                    alt="Import icon"
                  ></img>
                </div>
                <p className="pt-2 text-md font-semibold">Foam</p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                  <img
                    src={cream}
                    className="text-gray-500 w-1/2 h-1/2"
                    alt="Import icon"
                  ></img>
                </div>
                <p className="pt-2 text-md font-semibold">Cream</p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                  <img
                    src={serum}
                    className="text-gray-500 w-2/3 h-2/3"
                    alt="Import icon"
                  ></img>
                </div>
                <p className="pt-2 text-md font-semibold">Serum</p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                  <img
                    src={sunscreen}
                    className="text-gray-500 w-1/2 h-1/2"
                    alt="Import icon"
                  ></img>
                </div>
                <p className="pt-2 text-md font-semibold">Sunscreen</p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                  <img
                    src={lotion}
                    className="text-gray-500 w-2/3 h-2/3"
                    alt="Import icon"
                  ></img>
                </div>
                <p className="pt-2 text-md font-semibold">Lotion</p>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                  <img
                    src={makeup}
                    className="text-gray-500 w-1/2 h-1/2"
                    alt="Import icon"
                  ></img>
                </div>
                <p className="pt-2 text-md font-semibold">Makeup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
