import React, { useState, useEffect } from 'react'
import Cookies from "js-cookie";
import axios from "../../Components/api/axios";


function ShowProduct() {
  const [ProductData, setProductData] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get("/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setProductData(response.data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setProductData([]);
    }
  };

  const handleEdit = (productId) => {
    console.log("Editing product with ID:", productId);
  };

  const handleDelete = async (productId) => {
    try {
      const token = Cookies.get("token");
      console.log("Deleting product with ID:", productId);
      const response = await axios.delete(`/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Delete response:", response.data);
      // After successful deletion, fetch data again to update the UI
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-10 w-[900px] h-screen">
      <h2 className="text-xl font-bold mb-4">Product Information</h2>
      <div className="overflow-y-auto ">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="flex items-center border border-gray-300 bg-white p-10 mb-6 w-[100%]"
          >
            <div className="flex ml-10 w-[50%] ">
              {/* Left side with product_icon */}
              {/* <img src="{{ $product_icon }}" /> */}
              <img
               src={product.product_image}
                alt={product.product_title}
                className="mr-6 border-2 w-[150px] h-[150px]"
              />
            </div>

            <div className="flex ml-10 w-[50%] ">
              {/* Left side with product_icon */}
              {/* <img src="{{ $product_icon }}" /> */}
              <img
               src={product.product_banner}
                alt={product.product_title}
                className="mr-6 border-2 w-[150px] h-[150px]"
              />
            </div>
            <div className="flex flex-col w-[50%] ">
              {/* Right side with product title, created at, and updated at */}
              <div className="mb-2 ">
                <h1 className="text-lg uppercase">product </h1>
                <h2 className="text-lg text-blue-500">{product.product_name}</h2>
                <h1 className="text-lg uppercase">product Description</h1>
                <h2 className="text-lg text-blue-500 ">{product.product_description}</h2>
                <h1 className="text-lg uppercase">product stock</h1>
                <h2 className="text-lg text-blue-500 ">{product.product_stock}</h2>
                <h1 className="text-lg uppercase">product link review</h1>
                <a href={product.product_review} className="text-lg text-blue-500 ">{product.product_review}</a>


                {/* <div className="text-sm">Created At: {product.created_at}</div>
                <div className="text-sm">Updated At: {product.updated_at}</div> */}
              </div>
              <div className="flex space-x-4">
                <button
                onClick={() => handleEdit(product.id)}
                className="btn-blue bg-green-400 px-2 py-1 rounded-lg text-white hover:bg-green-600">Edit</button>
                <button 
                onClick={() => handleDelete(product.id)}
                className="btn-red bg-red-400 px-2 py-1 rounded-lg text-white hover:bg-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowProduct