import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../api/axios";
import useAuthContext from "./../context/AuthContext"


function DataBranding() {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const navigateToProductDetails = (
    productImage,
    productName,
    productDescription,
    productPrice,
    productStock,
    productReview,
    productId
  ) => {
    console.log("User ID:", user.id);
    navigate(`/details`, {
      state: {
        productImage,
        productName,
        productDescription,
        productPrice,
        productStock,
        productReview,
        userId: user.id,
        productId: productId
      },
    });
  };

  const fetchCategoryData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.request({
        url: `/category/${id}/products`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setCategoryData(null);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [id]); 

  if (!categoryData) {
    return <div>Loading...</div>;
  }
  

  return (
    <div>
      <h1 className="font-bold text-4xl pb-4 m-10">Product Brand: {categoryData.category_title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10">
        {categoryData.products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg">
            <img 
            src={product.product_image} 
            alt={product.product_image} 
            className="max-sm:w-30 max-sm:h-50 lg:h-80 lg:w-72 object-cover rounded-t-xl"/>
            <h3 className="md:text-lg text-xs max-sm:text-sm font-medium mb-2">
              {product.product_name}
            </h3>
            <h3 className="md:text-lg text-xs max-sm:text-sm font-medium mb-2">
              Stock: {product.product_stock}
            </h3>
            <p className="text-gray-600 line-clamp-3 text-xs md:text-sm mb-4">
              {product.product_description}
            </p>
            
            <div className="flex justify-between"> {/* Flex container */}
              <span className="font-bold md:text-lg text-xs max-sm:text-sm">
                ${product.product_price}
              </span>
              <button
              onClick={() => {
                     
                console.log("Product data:", product);
                navigateToProductDetails(
                  product.product_banner,
                  product.product_name,
                  product.product_description,
                  product.product_price,
                  product.product_stock,
                  product.product_review,
                  product.id
                );
              }}
                className="bg-pink-400 hover:bg-pink-600 
                text-white font-bold py-2 px-4 max-sm:p-2 max-sm:text-xs rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataBranding;
