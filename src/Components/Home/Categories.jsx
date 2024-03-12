import React from "react";

function Categories() {
  return (
    <>
      <div className="bg-pink-100 pb-10">
        <div className="text-center pt-20 ">
          <h1 className="font-bold text-4xl mb-4">Categories</h1>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-7 px-10 pt-10">
            <button
              type="button"
              className="rounded-full text-white text-sm p-10 border-blue-600 bg-blue-500 hover:bg-blue-400"
            >
              Click me
            </button>
            <button
              type="button"
              className=" text-white text-sm py-2.5 px-4 border-gray-600 bg-gray-500 hover:bg-gray-400"
            >
              Click me
            </button>
            <button
              type="button"
              className="rounded-xl text-white text-sm py-2.5 px-4  bg-green-500 hover:bg-green-400"
            >
              Click me
            </button>
            <button
              type="button"
              className=" text-white text-sm py-2.5 px-4  bg-red-500 hover:bg-red-400"
            >
              Click me
            </button>
            <button
              type="button"
              className=" text-white text-sm py-2.5 px-4  bg-yellow-500 hover:bg-yellow-400"
            >
              Click me
            </button>
            <button
              type="button"
              className=" text-white text-sm py-2.5 px-4  bg-yellow-500 hover:bg-yellow-400"
            >
              Click me
            </button>
            <button
              type="button"
              className=" text-white text-sm py-2.5 px-4  bg-yellow-500 hover:bg-yellow-400"
            >
              Click me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
