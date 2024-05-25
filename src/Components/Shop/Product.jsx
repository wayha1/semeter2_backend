import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuthContext from "./../context/AuthContext";
import Filter from "./FilterSearch";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ul className="flex justify-center text-xs font-medium space-x-1 py-10">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center justify-center w-5 h-5 md:w-10 md:h-10 border border-gray-100 rounded"
        >
          {/* Previous page icon */}
          Back
        </button>
      </li>

      {[...Array(totalPages).keys()].map((_, index) => {
        const page = index + 1;
        return (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`w-5 h-5 md:w-10 md:h-10 flex items-center justify-center md:text-lg text-xs border border-gray-100 rounded leading-8 ${
                page === currentPage
                  ? "text-white bg-pink-400 border-pink-600"
                  : ""
              }`}
            >
              {page}
            </button>
          </li>
        );
      })}

      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center justify-center w-5 h-5 md:w-10 md:h-10 border border-gray-100 rounded"
        >
          {/* Next page icon */}
          Next
        </button>
      </li>
    </ul>
  );
};

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const cardsPerPage = 8; // Adjusted to display 8 products per page

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
        productId: productId,
      },
    });
  };

  const fetchData = async (page) => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: `/product?page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);
      setProducts(response.data.data);
      setTotalPages(response.data.totalPages); // Assuming the API response includes total pages
    } catch (error) {
      console.error("Error fetching product data:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    // Fetch data only if user is available
    if (user) {
      fetchData(currentPage);
    }
  }, [currentPage, user]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the index range of products to display based on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, products.length);

  return (
    <>
      <div className="w-full">
        <h1 className="font-bold text-4xl mb-4 flex items-center justify-center pt-10 w-full">
          Listing Product
        </h1>
        <p className="flex items-center justify-center pb-10 w-full">
          Find your perfect skincare match by exploring options based on your
          skin type, preferences, and budget.
        </p>
        <Filter />
        {/* Product card */}
        <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-20 gap-x-14 pt-10 pb-5">
          {products.slice(startIndex, endIndex).map((product) => (
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
                  {product.product_name}
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
                text-white font-bold py-2 px-4 max-sm:p-2 max-sm:text-xs rounded"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ProductCard;
