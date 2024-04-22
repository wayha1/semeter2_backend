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
{
  /* <div classNameName="container mx-auto p-10 pt-0 md:py-20 px-0 md:pt-0 md:pb-10 md:px-0">
        <div className="transform ">
          <img
            className="lg:max-w-lg w-full"
            // className=""lg:max-h-lg auto=compress&amp;dpr=1&amp;h=30&amp;w=500 ,relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1
            src="https://editorial.femaledaily.com/wp-content/uploads/2022/03/BA-Korea-featured.png"
            alt=""
          />
          <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-12 right-5">
            <div className="flex justify-between font-bold text-sm">
              <p>New Product</p>
              <p className="text-gray-400">12th March, 2024</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10">
              SNAIL TRUECICA
            </h2>
            <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
              This serum contains 89% Snail Truecica, which provides powerful
              skin energy trough the combination of black snail mucin and
              SomeByMi's Truecica technique, which helps against signs of
              anti-aging and keeping the skin free from external irritations.
            </p>
            <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div> */
}
