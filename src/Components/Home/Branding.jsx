import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../api/axios";

function Branding() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: "/category",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}/products`);
  };
  

  return (
    <div className="bg-white pt-10">
      <div className="text-center pb-10">
        <h1 className="font-bold text-4xl pb-4">Favorites Brand</h1>
      </div>
      <div className="flex space-x-4 md:space-x-20 overflow-hidden group pt-10 lg:pt-0 lg:m-16">
        <div className="flex space-x-10 md:space-x-20 group-hover:paused">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              {/* Use onClick to handle category click */}
              <div onClick={() => handleCategoryClick(category.id)}>
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto hover:scale-110">
                  <div className="w-full h-full hover:scale-110">
                    <img src={category.category_icon} alt={category.category_title} />
                  </div>
                </div>
              </div>
              <p className="text-center">{category.category_title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Branding;
