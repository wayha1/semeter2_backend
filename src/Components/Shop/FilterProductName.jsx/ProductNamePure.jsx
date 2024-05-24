import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./../../context/AuthContext"


function ProductNamePure () {
  const { name } = useParams();
  const [product1, setProduct1] = useState([]);
  const { user } = useAuthContext();
  const navigate = useNavigate();


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

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: `product/${name}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);
      const luminousGlowProducts = response.data.data.filter(
        (product) => product.product_brand === "Luminous Glow 2023"
      );
      setProduct1(luminousGlowProducts);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setProduct1([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-10">
        {product1.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg">
            <img 
  src={product.product_image} 
  alt={product.product_name} 
  className="max-w-full h-auto object-cover rounded-t-xl"
/>

            <h3 className="md:text-lg text-xs max-sm:text-sm font-medium mb-2">
              {product.product_brand}
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
                  product.product_image,
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

export default ProductNamePure 