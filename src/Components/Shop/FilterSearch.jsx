import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import ProductNameLuminous from "./Menu/ProductNameLuminous";
import ProductNamePure from "./Menu/ProductNamePure";
import ProductNameElysian from "./Menu/ProductNameElysian";
import ProductNameSerence from "./Menu/ProductNameSerence";
import ProductNameVitale from "./Menu/ProductNameVitale";
import ProductNameNature from "./Menu/ProductNameNature";
import SeeAll from "./Menu/SeeAll";

function Filter() {
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="md:px-28 pt-10">
      <div className="flex justify-between items-center gap-3 max-sm:flex-wrap max-sm:justify-center text-center">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="bg-pink-400 hover:bg-pink-500 text-white py-1 px-2 rounded-lg text-md font-bold"
        >
          <option value="">All</option>
          <option value="Luminous Glow">Luminous Glow</option>
          <option value="Pure Radiance">Pure Radiance</option>
          <option value="Elysian Skincare">Elysian Skincare</option>
          <option value="Serene Essence">Serene Essence</option>
          <option value="Vitalé Beauty">Vitale Beauty</option>
          <option value="Natura Luxe">Natura Luxe</option>
        </select>
        <Search />
      </div>
      {/* Conditional rendering based on selected category */}
      {selectedCategory === "" && <SeeAll/>}
      {selectedCategory === "Luminous Glow" && <ProductNameLuminous/>}
      {selectedCategory === "Pure Radiance" && <ProductNamePure/>}
      {selectedCategory === "Elysian Skincare" && <ProductNameElysian/>}
      {selectedCategory === "Serene Essence" && <ProductNameSerence/>}
      {selectedCategory === "Vitalé Beauty" && <ProductNameVitale/>}
      {selectedCategory === "Natura Luxe" && <ProductNameNature/>}
      {/* Add similar conditions for other categories */}
    </div>
  );
}

export default Filter;
