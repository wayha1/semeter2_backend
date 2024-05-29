import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { CgArrowLeftO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";
import Pagination from "./../Shop/Pagination";

function BrandProduct() {
  const { name } = useParams();
  const [brandData, setBrandData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const cardsPerPage = 8; // Display 8 products per page

  const fetchBrandData = async (page) => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(`/brand/name/${encodeURIComponent(name)}?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && response.data.data) {
        setBrandData(response.data.data);
        setTotalPages(response.data.totalPages || 1); // Assuming the API response includes total pages
      } else {
        console.error("Unexpected data format:", response.data);
        setBrandData(null);
      }
    } catch (error) {
      console.error("Error fetching brand data:", error);
      setBrandData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrandData(currentPage);
  }, [name, currentPage]);

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

  if (!brandData) {
    return <div>No data available</div>;
  }

  // Calculate the index range of products to display based on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, brandData.products.length);

  return (
    <>
      <div className="w-full">
        <div className="p-10">
            <Link to="/">
              <CgArrowLeftO size={32} />
            </Link>
          </div>
        <h1 className="text-center text-2xl font-bold my-4">{brandData.brand}</h1>
        <div className="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center gap-y-20 gap-x-14 pt-10 pb-5">
          {brandData.products.slice(startIndex, endIndex).map((product) => (
            <div key={product.id} className="max-sm:w-36 max-sm:h-50 lg:w-72 duration-500">
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

export default BrandProduct;
