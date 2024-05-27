import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useAuthContext from "../../context/AuthContext";
import Pagination from "../Pagination";

function ProductNameVitale() {
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const name = "Vitalé Beauty";
  const cardsPerPage = 8; // Display 8 products per page

  const fetchData = async (page) => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data for category:", name);
      const response = await axios.request({
        url: `/category/name/${encodeURIComponent(name)}?page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);

      if (response.data && response.data.data) {
        setCategoryData(response.data.data);
        setTotalPages(response.data.totalPages); // Assuming the API response includes total pages
      } else {
        console.error("Unexpected data format:", response.data);
        setCategoryData(null);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      setCategoryData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!categoryData) {
    return <div>No data available</div>;
  }

  // Calculate the index range of products to display based on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, categoryData.products.length);

  return (
    <>
      <div className="w-full">
        <h1 className="text-center text-2xl font-bold my-4">{categoryData.category_title}</h1>
        <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-20 gap-x-14 pt-10 pb-5">
          {categoryData.products.slice(startIndex, endIndex).map((product) => (
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
}

export default ProductNameVitale