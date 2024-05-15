import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "./FilterSearch";
import Cookies from "js-cookie";
import axios from "../api/axios";

const ProductCard = ({ product }) => {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate(); // Import useNavigate hook

  const navigateToProductDetails = (
    productImage,
    productName,
    productDescription,
    productPrice,
    productStock,
    productReview) => {
    // Navigate to ProductDetails component with the product image as state
    navigate(`/details`, { state: { 
      productImage, 
      productName,
      productDescription,
      productPrice,
      productStock,
      productReview}});
  };


  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: "/product",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);
      setProduct(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setProduct([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      {/* <div className="pt-10 bg-pink-100 pb-10"> */}
      <div className="w-full">
        <h1 className="font-bold text-4xl mb-4 flex items-center justify-center pt-10 w-full">
          Listing Product
        </h1>
        <p className="flex items-center justify-center pb-10 w-full">
          Find your perfect skincare match by exploring options based on your
          skin type, preferences, and budget.{" "}
        </p>
        <Filter />
        {/* Product card */}
        <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-20 gap-x-14 pt-10 pb-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-sm:w-36 max-sm:h-50 lg:w-72  duration-500"
            >
              <div className="relative">
                <img
                  src={product.product_image}
                  alt="Product"
                  className="max-sm:w-30 max-sm:h-50 lg:h-80 lg:w-72 object-cover rounded-t-xl"
                />
                
              </div>
              <div className="px-4">
                <h3 className="md:text-lg text-xs max-sm:text-sm font-medium mb-2">
                  {product.product_brand}
                </h3>
                <h3 className="md:text-lg text-xs max-sm:text-sm font-medium mb-2">
                  Stock: {product.product_stock}
                </h3>
                <p className="text-gray-600 line-clamp-3 text-xs md:text-sm mb-4">
                  {product.product_description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold md:text-lg text-xs max-sm:text-sm ">
                    {" "}
                    ${product.product_price}
                  </span>
                  <button 
                    onClick={() => navigateToProductDetails(
                      product.product_image, 
                      product.product_name,
                      product.product_description,
                      product.product_price,
                      product.product_stock,
                      product.product_review)}
                    className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 max-sm:p-2 max-sm:text-xs rounded">
                      Buy Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}

      {/* Pagination */}

      <ul className="flex justify-center text-xs font-medium space-x-1 py-10">
        <li>
          <a
            href="/?page=1"
            className="inline-flex items-center justify-center w-5 h-5 md:w-10 md:h-10 border border-gray-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/?page=1"
            className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs border border-gray-100 rounded leading-8"
          >
            1
          </a>
        </li>

        <li className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs text-white bg-pink-400 border-pink-600 rounded leading-8">
          2
        </li>

        <li>
          <a
            href="/?page=3"
            className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs border border-gray-100 rounded leading-8"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="/?page=4"
            className=" w-5 h-5 md:w-10 md:h-10 flex items-center justify-center  md:text-lg text-xs border border-gray-100 rounded leading-8"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="/?page=3"
            className="inline-flex items-center md:text-lg text-xs justify-center w-5 h-5 md:w-10 md:h-10 border border-gray-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default ProductCard;
