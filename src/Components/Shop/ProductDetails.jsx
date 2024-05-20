import React, { useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { Link, useLocation, useParams } from "react-router-dom";
import CommentRate from "./CommentRate";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  console.log("Location state:", location.state);
  const productImage = location.state && location.state.productImage;
  const productName = location.state && location.state.productName;
  const productDescription =
    location.state && location.state.productDescription;
  const productPrice = location.state && location.state.productPrice;
  const productStock = location.state && location.state.productStock;
  // const productReview = location.state && location.state.productReview;

  const [showFullDescription, setShowFullDescription] = useState(false);
  // const [rating, setRating] = useState(0); // Initialize rating state
  
  // const handleRatingChange = (e) => {
  //   setRating(e.target.value);
  // };
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="py-8 bg-pink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div>
            <Link to="/shop">
              <CgArrowLeftO size={32} />
            </Link>
          </div>
          <div className="md:flex-1 px-4">
            <div className="h-[460px] px-8 pb-8">
              {productImage ? (
                <img
                  className="w-full h-full object-cover"
                  src={productImage}
                  alt=""
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                  Image Not Available
                </div>
              )}
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <button className="w-full bg-pink-500 dark:bg-pink-500 text-white py-2 rounded-full font-bold hover:bg-pink-800 dark:hover:bg-pink-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 ">
                <button className="w-full bg-sky-100 dark:bg-gray-700 text-pink-500 dark:text-white py-2  rounded-full font-bold hover:bg-pink-500 hover:text-white dark:hover:bg-gray-600">
                  Add to Favorite
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">
              Product Name: {productName}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Product Description:{" "}
              {showFullDescription ? (
                productDescription
              ) : (
                <>
                  {productDescription.slice(0, 120)}
                  {productDescription.length > 120 && "... "}
                  <button
                    className="text-blue-500 underline"
                    onClick={toggleDescription}
                  >
                    {showFullDescription ? "Show less" : "Show more"}
                  </button>
                </>
              )}
            </p>
            <div className=" mb-4">
              <div className="mr-4">
                <span className="font-bold">Price: {productPrice}$</span>
              </div>
              <div className="flex space-x-1">
                <span className="font-bold">Stock:</span>
                <span className="text-green">
                  <div className="text-green-500 font-bold">{productStock}</div>
                </span>
              </div>
            </div>
            <div className=" mb-4">
              {/* Rating Section */}
              {/* <div className="flex items-center mb-2">
                <span className="font-bold mr-2">Rating:</span>
                <select
                  value={rating}
                  onChange={handleRatingChange}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="0">Select rating</option>
                  {[...Array(5)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div> */}
              {/* Insert Rating Component Here */}
            </div>
            <div className=" mb-4">
              {/* Comment Section */}
              <CommentRate productId={id} />
            </div>
            {/* <div className=" mb-4">
              <iframe
                className="w-full h-[250px]"
                src={productReview}
                title="Product Review"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
