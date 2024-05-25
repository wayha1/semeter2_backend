import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

function Filter() {
  const navigate = useNavigate();

  const handleCategoryClick = (productBrand) => {
    console.log(`Navigating to /shop/product/${productBrand}`);
    navigate(`/shop/product/${productBrand}`);
  };

  const handleCategoryClick1 = (productBrand) => {
    console.log(`Navigating to /shop/product/${productBrand}`);
    navigate(`/shop1/product/${productBrand}`);
  };

  const handleCategoryClick2 = (productBrand) => {
    console.log(`Navigating to /shop/product/${productBrand}`);
    navigate(`/shop2/product/${productBrand}`);
  };

  const handleCategoryClick3 = (productBrand) => {
    console.log(`Navigating to /shop/product/${productBrand}`);
    navigate(`/shop3/product/${productBrand}`);
  };

  const handleCategoryClick4 = (productBrand) => {
    console.log(`Navigating to /shop/product/${productBrand}`);
    navigate(`/shop4/product/${productBrand}`);
  };

  const handleCategoryClick5 = (productBrand) => {
    console.log(`Navigating to /shop/product/${productBrand}`);
    navigate(`/shop5/product/${productBrand}`);
  };

  return (
    <div className="md:flex md:justify-between md:px-28">
      <div>
        <Search />
        <div className="flex max-sm:flex-wrap gap-3 max-sm:justify-center text-center">
          <a
            href="/shop"
            className="bg-blue-500 hover:bg-blue-500 py-1 px-2 rounded-lg text-md font-bold"
          >
            All
          </a>
          <div
            onClick={() => handleCategoryClick("Luminous Glow 2023")}
            className="bg-green-200 text-white hover:bg-green-500 py-1 
            px-2 rounded-lg text-md font-bold w-[180px]"
          >
            Luminous Glow
          </div>
          <div
            onClick={() => handleCategoryClick1("Pure Radiance 2023")}
            className="bg-pink-200 text-white hover:bg-pink-500 py-1 
            px-2 rounded-lg text-md font-bold w-[180px]"
          >
            Pure Radiance
          </div>
          <div
            onClick={() => handleCategoryClick2("Elysian Skincare 2023")}
            className="bg-red-200 text-white hover:bg-red-500 py-1 
            px-2 rounded-lg text-md font-bold w-[180px]"
          >
           Elysian Skincare
          </div>
          <div
            onClick={() => handleCategoryClick3("Serene Essence 2023")}
            className="bg-yellow-200 text-white hover:bg-yellow-500 py-1 
            px-2 rounded-lg text-md font-bold w-[180px]"
          >
           Serene Essence
          </div>
          <div
            onClick={() => handleCategoryClick4("Vitalé Beauty 2023")}
            className="bg-purple-200 text-white hover:bg-purple-500 py-1 
            px-2 rounded-lg text-md font-bold w-[180px]"
          >
           Vitalé Beauty
          </div>
          <div
            onClick={() => handleCategoryClick5("Natura Luxe 2023")}
            className="bg-blue-200 text-white hover:bg-blue-500 py-1 
            px-2 rounded-lg text-md font-bold w-[180px]"
          >
           Natura Luxe
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Filter;
