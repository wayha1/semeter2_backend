import React from "react";
import { Link } from "react-router-dom";
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
          <div className="flex space-x-4 md:space-x-16 overflow-hidden group pt-10">
            <div className="flex space-x-4 md:space-x-16 animate-loop-scroll group-hover:paused">
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2 ">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl ">
                      <img
                        src={moiturizer}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Moiturizer</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={foam}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Foam</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={cream}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Cream</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={serum}
                        className="text-gray-500 w-2/3 h-2/3"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Serum</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={sunscreen}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Sunscreen</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={lotion}
                        className="text-gray-500 w-2/3 h-2/3"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Lotion</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={makeup}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Makeup</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* second loop */}
            <div
              className="flex space-x-4 md:space-x-16 animate-loop-scroll group-hover:paused"
              aria-hidden="true"
            >
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2 ">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl ">
                      <img
                        src={moiturizer}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Moiturizer</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={foam}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Foam</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={cream}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Cream</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={serum}
                        className="text-gray-500 w-2/3 h-2/3"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Serum</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={sunscreen}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Sunscreen</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={lotion}
                        className="text-gray-500 w-2/3 h-2/3"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Lotion</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={makeup}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Makeup</p>
                  </div>
                </Link>
              </div>
            </div>
            {/* Third Loop */}
            <div className="flex space-x-4 md:space-x-16 animate-loop-scroll group-hover:paused">
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2 ">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl ">
                      <img
                        src={moiturizer}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Moiturizer</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={foam}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Foam</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={cream}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Cream</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={serum}
                        className="text-gray-500 w-2/3 h-2/3"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Serum</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={sunscreen}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Sunscreen</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={lotion}
                        className="text-gray-500 w-2/3 h-2/3"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Lotion</p>
                  </div>
                </Link>
              </div>
              <div className="text-center">
                <Link to="/about">
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                    <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300  flex items-center justify-center duration-500 hover:scale-105 hover:shadow-2xl">
                      <img
                        src={makeup}
                        className="text-gray-500 w-1/2 h-1/2"
                        alt="Import icon"
                      ></img>
                    </div>
                    <p className="pt-2 text-md font-semibold">Makeup</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
