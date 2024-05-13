import React from "react";
// import Categories from "../Home/Categories";
function Shop() {
  return (
    <>
      <div className=" bg-pink-100 w-full">
        <div className=" text-pink-400 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row items-center">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight mb-4 md:text-pink-400">
                  Welcome to the Beauty Wonderland!
                </h1>
                <p className="text-xl mb-8 text-gray-600">
                  Explore our Beauty Haven and Shop Now for an Instant Upgrade
                  to Gorgeousness!
                </p>
              </div>
              <div className="lg:w-1/2 lg:ml-12">
                <img
                  src="https://imgcdn.femaledaily.com/2020/07/7-BINTANG-DRAMA-KOREA-YANG-JADI-BRAND-AMBASSADOR-PRODUK-KECANTIKAN.jpg"
                  alt="beauty"
                  className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
