import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Branding() {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get("/brand", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);
      setBrands(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setBrands([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (brandName) => {
    navigate(`/brand/name/${encodeURIComponent(brandName)}`);
  };

  return (
    <div className="bg-white pt-10">
      <div className="text-center pb-10">
        <h1 className="font-bold text-4xl pb-4">Favorites Brand</h1>
      </div>
      <div className="flex space-x-4 md:space-x-16 overflow-hidden group pt-10">
        <div className="flex space-x-4 md:space-x-16 animate-loop-scroll group-hover:paused">
          {brands.length > 0 ? (
            brands.map((brand) => (
              <div
                key={brand.id}
                className="flex flex-col justify-center items-center cursor-pointer"
                onClick={() => handleCategoryClick(brand.brand)}
              >
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                  <img
                    src={brand.brand_icons}
                    alt={brand.brand}
                    className="w-[100px] h-[100px] object-cover"
                  />
                </div>
                <p className="text-center">{brand.brand}</p>
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Branding;
