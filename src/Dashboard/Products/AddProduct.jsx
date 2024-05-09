import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from "../../Components/api/axios";
import UploadFile from "../UploadFile"; // Import the UploadFile component

function AddProduct() {
  const [product, setProduct] = useState({
    product_name: "",
    product_description: "",
    product_price: "",
    product_stock: "",
    product_rating: "",
    product_feedback: "",
    product_image: null,
    product_review: "",
    product_banner: null,
    category_id: "",
  });
  const [categories, setCategories] = useState([]); // State to store categories data

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploadConfirmed, setUploadConfirmed] = useState(false); // State to track upload confirmation

  const cloudName = "ds9ccmtdq";
  const unsignedUploadPreset = "ntrpox3d";

  // Fetch categories data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch categories data from the API
  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setCategories([]);
    }
  };

  // Function to handle form input changes
  const handleInput = (e) => {
    e.persist();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    if (!token) {
      setErrorMessage("Unauthorized access. Please login.");
      return;
    }

    const formData = new FormData();
    // Append product data to FormData object
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post("/product", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        // Reset product state to clear form fields after successful submission
        setProduct({
          product_name: "",
          product_description: "",
          product_price: "",
          product_stock: "",
          product_rating: "",
          product_feedback: "",
          product_image: null,
          product_review: "",
          product_banner: null,
          category_id: "",
        });
        // Product added successfully
        setSuccessMessage("Product added successfully.");
        console.log("Product added successfully:", response.data);
      } else {
        // Handle error adding product
      }
    } catch (error) {
      // Handle error
    }
  };

  // Function to handle image upload
  const handleImageUpload = (imageUrl, bannerUrl) => {
    setProduct({
      ...product,
      product_image: imageUrl,
      product_banner: bannerUrl,
    });
  };

  const handleConfirmUpload = async (imageUrl, bannerUrl) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }
      handleSubmit();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the product.");
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="mt-10">
        <h1 className="text-xl font-semibold mb-4">Add Product</h1>
        <div className=" w-[600px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product_name"
              >
                Product Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product_name"
                type="text"
                placeholder="Product Name"
                name="product_name"
                value={product.product_name}
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product_description"
              >
                Product Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product_description"
                placeholder="Product Description"
                name="product_description"
                value={product.product_description}
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category_id"
              >
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category_id"
                value={product.category_id}
                onChange={(e) =>
                  setProduct({ ...product, category_id: e.target.value })
                }
              >
                <option>Select category...</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product_stock"
              >
                Stock
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product_stock"
                type="number"
                placeholder="Stock"
                name="product_stock"
                value={product.product_stock}
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product_price"
              >
                Price
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  $
                </span>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 pl-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="product_price"
                  type="number"
                  placeholder="Price"
                  name="product_price"
                  value={product.product_price}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product_review"
              >
                Link video Product
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product_review"
                type="text"
                placeholder="Link video Product"
                name="product_review"
                value={product.product_review}
                onChange={handleInput}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product_image"
              >
                Product Image
              </label>
              <UploadFile
                cloudName={cloudName}
                unsignedUploadPreset={unsignedUploadPreset}
                handleImageUpload={handleImageUpload}
                onConfirmUpload={handleConfirmUpload} // Pass the callback function
                setUploadConfirmed={setUploadConfirmed} // Pass the state setter function
              />
            </div>
            {/* Error and success messages */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
