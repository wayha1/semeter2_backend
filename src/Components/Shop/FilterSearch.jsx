import React, { useState } from "react";
import Product from "./Product"; // Assume this component displays the list of products
import Search from "./Search";

function Filter() {
  const [filter, setFilter] = useState("All");

  const handleCategoryClick = (category) => {
    setFilter(category);
  };

  return (
    <div className="md:flex md:justify-between md:px-28">
      <div className="flex flex-wrap gap-3 justify-center md:justify-start text-center mb-4 md:mb-0">
        <a
          href="/shop"
          className={`${
            filter === "All" ? "bg-blue-700" : "bg-blue-500"
          } text-white hover:bg-blue-500 py-1 px-2 rounded-lg text-md font-bold`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </a>
        <div
          className={`${
            filter === "Mask" ? "bg-green-700" : "bg-green-200"
          } text-white hover:bg-green-500 py-1 px-2 rounded-lg text-md font-bold cursor-pointer`}
          onClick={() => handleCategoryClick("Mask")}
        >
          Mask
        </div>
        <div
          className={`${
            filter === "Serum" ? "bg-pink-700" : "bg-pink-200"
          } text-white hover:bg-pink-500 py-1 px-2 rounded-lg text-md font-bold cursor-pointer`}
          onClick={() => handleCategoryClick("Serum")}
        >
          Serum
        </div>
        <div
          className={`${
            filter === "Moisturizer" ? "bg-red-700" : "bg-red-200"
          } text-white hover:bg-red-500 py-1 px-2 rounded-lg text-md font-bold cursor-pointer`}
          onClick={() => handleCategoryClick("Moisturizer")}
        >
          Moisturizer
        </div>
        <div
          className={`${
            filter === "Foam" ? "bg-yellow-700" : "bg-yellow-200"
          } text-white hover:bg-yellow-500 py-1 px-2 rounded-lg text-md font-bold cursor-pointer`}
          onClick={() => handleCategoryClick("Foam")}
        >
          Foam
        </div>
        <div
          className={`${
            filter === "Sunscreen" ? "bg-purple-700" : "bg-purple-200"
          } text-white hover:bg-purple-500 py-1 px-2 rounded-lg text-md font-bold cursor-pointer`}
          onClick={() => handleCategoryClick("Sunscreen")}
        >
          Sunscreen
        </div>
        <div
          className={`${
            filter === "Lotion" ? "bg-blue-700" : "bg-blue-200"
          } text-white hover:bg-blue-500 py-1 px-2 rounded-lg text-md font-bold cursor-pointer`}
          onClick={() => handleCategoryClick("Lotion")}
        >
          Lotion
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Search />
      </div>
      <Product filter={filter} />{" "}
      {/* Pass the filter to the ProductList component */}
    </div>
  );
}

export default Filter;
