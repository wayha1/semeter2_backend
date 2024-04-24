import React, { useState, useEffect } from "react";
import axios from "../Components/api/axios";

function ShowCategory() {
  const [categoryData, setCategoryData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: "/category",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setCategoryData(response.data.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setCategoryData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-10 w-[850px] h-[500px] ">
      <h2 className="text-xl font-bold mb-4">Category Information</h2>
      <div className="flex flex-col">
        {categoryData.map((category) => (
          <div key={category.id} className="flex items-center border border-gray-300 bg-white p-10 mb-6">
            <div className="mr-10">
              {/* Left side with category_icon */}
              <img
                src={category.category_icon || "placeholder.png"} // Placeholder image URL
                alt={category.category_title}
                className="w-50 h-50 mr-20 border-2 p-10"
              />
            </div>
            <div className="flex flex-col mr-20">
              {/* Right side with category title, created at, and updated at */}
              <div className="mb-2">
                <div className="text-sm">Category ID: {category.id}</div>
                <div className="text-sm">Title: {category.category_title}</div>
                <div className="text-sm">Created At: {category.created_at}</div>
                <div className="text-sm">Updated At: {category.updated_at}</div>
              </div>
            </div>
            <div className="flex space-x-4 ml-auto">
              <button className="bg-blue-500 hover:bg-blue-700 
              text-white font-bold py-2 px-2 rounded-xl w-[90px]
              active:bg-blue-400">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 
              text-white font-bold py-2 px-2 rounded-xl w-[90px]
              active:bg-red-400">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowCategory;
