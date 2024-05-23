import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const BestProducts = () => {
  const [bestProducts, setBestProducts] = useState([]);
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
    navigate(`/details`, {
      state: {
        productImage,
        productName,
        productDescription,
        productPrice,
        productStock,
        productReview,
        productId,
      },
    });
  };

  const fetchBestProducts = async () => {
    try {
      const response = await axios.get("/best-products");
      setBestProducts(response.data);
    } catch (error) {
      console.error("Error fetching best products:", error);
      setBestProducts([]);
    }
  };

  useEffect(() => {
    fetchBestProducts();
  }, []);

  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl mb-4 flex items-center justify-center pt-10 w-full">
        Best Selling Products
      </h2>
      <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-20 gap-x-14 pt-10 pb-5">
        {bestProducts.map((product) => (
          <div
            key={product.id}
            className="max-sm:w-36 max-sm:h-50 lg:w-72 duration-500"
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
                <span className="font-bold md:text-lg text-xs max-sm:text-sm">
                  ${product.product_price}
                </span>
                <button
                  onClick={() => {
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
                  className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 max-sm:p-2 max-sm:text-xs rounded"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
