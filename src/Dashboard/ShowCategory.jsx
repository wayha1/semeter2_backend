import React, { useState, useEffect } from "react";
import axios from "../Components/api/axios";
import Cookies from "js-cookie";

function ShowCategory() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        console.log("Fetching data...");
        const response = await axios.get("/category", {
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

    fetchData();
  }, []);

  return (
    <div className="p-10 w-[850px] h-screen">
      <h2 className="text-xl font-bold mb-4">Category Information</h2>
      <div className="overflow-y-auto max-h-[870px]">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="flex items-center border border-gray-300 bg-white p-10 mb-6 h-[180px]"
          >
            <div className="mr-10">
              {/* Left side with category_icon */}
              {/* <img src="{{ $category_icon }}" /> */}
              <img
               src={`http://localhost:8000/${category.category_icon}`}
                alt={category.category_title}
                className="h-32 mr-6 border-2 w-[100px]"
              />
            </div>
            <div className="flex flex-col">
              {/* Right side with category title, created at, and updated at */}
              <div className="mb-2">
                <div className="text-sm">Category ID: {category.id}</div>
                <div className="text-lg text-blue-500">Title: {category.category_title}</div>
                {/* <div className="text-sm">Created At: {category.created_at}</div>
                <div className="text-sm">Updated At: {category.updated_at}</div> */}
              </div>
              <div className="flex space-x-4">
                <button className="btn-blue bg-green-400 px-2 py-1 rounded-lg text-white hover:bg-green-600">Edit</button>
                <button className="btn-red bg-red-400 px-2 py-1 rounded-lg text-white hover:bg-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowCategory;
