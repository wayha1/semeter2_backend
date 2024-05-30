import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import SeeAll from "../Shop/Menu/SeeAll";

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
        Products
      </h2>
      <SeeAll/>
    </div>
  );
};

export default BestProducts;
