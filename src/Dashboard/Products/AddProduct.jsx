import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UploadFile from "../UploadFile"; 

function AddProduct() {
  const [product, setProduct] = useState({
    product_name: "",
    product_brand: "",
    product_description: "",
    product_price: "",
    product_stock: "",
    product_rating: "",
    product_feedback: "",
    product_image: "",
    product_review: "",
    product_banner: "",
    category_id: "",
  });
  const [categories, setCategories] = useState([]); 

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
      const response = await axios.get("http://127.0.0.1:8000/api/category", {
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

  // Inside the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    if (!token) {
      setErrorMessage("Unauthorized access. Please login.");

      
      return;
    }

    try {
      // Upload the product image to Cloudinary
      const imageFormData = new FormData();
      imageFormData.append("file", product.product_image);
      imageFormData.append("upload_preset", unsignedUploadPreset);

      // Declare imageResponse variable
      const imageResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        imageFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Upload the product banner to Cloudinary
      const bannerFormData = new FormData();
      bannerFormData.append("file", product.product_banner);
      bannerFormData.append("upload_preset", unsignedUploadPreset);

      // Declare bannerResponse variable
      const bannerResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        bannerFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (imageResponse.status === 200 && bannerResponse.status === 200) {
        const imageUrl = imageResponse.data.secure_url;
        const bannerUrl = bannerResponse.data.secure_url;

        // Update product object with uploaded image URLs
        setProduct({ ...product, product_image: imageUrl, product_banner: bannerUrl });

        // Send product data to your backend server
        const productResponse = await axios.post(
          "http://127.0.0.1:8000/api/product",
          {
            // Include other product data here
            product_name: product.product_name,
            product_brand: product.product_brand,
            product_description: product.product_description,
            product_price: product.product_price,
            product_stock: product.product_stock,
            product_rating: product.product_rating,
            product_feedback: product.product_feedback,
            product_image: imageUrl,
            product_review: product.product_review,
            product_banner: bannerUrl,
            category_id: product.category_id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if the product was successfully added
        if (productResponse.status === 200) {
          setSuccessMessage("Product added successfully.");
          // Clear product data
          setProduct({
            product_name: "",
            product_brand: "",
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
        } else {
          // If there was an issue with the request, display an error message
          setErrorMessage("Failed to add product. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the product.");
    }
  };

  // Function to handle image upload
  const handleImageUpload = (imageUrl, bannerUrl) => {
    setProduct({ ...product, product_image: imageUrl, product_banner: bannerUrl });
  };

  const handleConfirmUpload = async (imageUrl,bannerUrl) => {
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
    <div className="w-full h-auto">
       <div className="mt-5">
      <h1 className="text-2xl font-semibold mb-4 text-blue-600">Add Product</h1>
      <div className="w-[600px] bg-white shadow-md rounded px-5 py-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_name">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_brand">
              Product Brand
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="product_brand"
              type="text"
              placeholder="Product Brand"
              name="product_brand"
              value={product.product_brand}
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_description">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category_id">
              Category
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category_id"
              value={product.category_id}
              onChange={(e) => setProduct({ ...product, category_id: e.target.value })}
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_stock">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_price">
              Price
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">$</span>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_review">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_image">
                Product Image
              </label>
              <UploadFile
                section="product_image"
                cloudName={cloudName}
                unsignedUploadPreset={unsignedUploadPreset}
                handleImageUpload={(imageUrl) => setProduct({ ...product, product_image: imageUrl })}
                handleIconUpload={(imageUrl) => setProduct({ ...product, product_banner: imageUrl })}
                onConfirmUpload={handleConfirmUpload}
                setUploadConfirmed={setUploadConfirmed}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product_banner">
                Product Banner
              </label>

              <UploadFile
                section="product_banner"
                cloudName={cloudName}
                unsignedUploadPreset={unsignedUploadPreset}
                handleBannerUpload={(bannerUrl) => setProduct({ ...product, product_banner: bannerUrl })} // Ensure this line is present
                handleIconUpload={(imageUrl) => setProduct({ ...product, product_banner: imageUrl })}
                onConfirmUpload={handleConfirmUpload}
                setUploadConfirmed={setUploadConfirmed}
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
