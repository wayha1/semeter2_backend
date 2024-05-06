import React, { useState } from 'react'
import axios from "../../Components/api/axios";
import Cookies from "js-cookie";

function AddProduct() {

  const [product, setProduct] = useState({
    product_title: "",
    product_icon: null, // New state for handling category icon image file
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview URL

  const handleInput = (e) => {
    e.persist();
    setProduct({ ...product, [e.target.name]: e.target.value });
    // Clear the error and success messages when the category title is changed
    if (e.target.name === "category_title") {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const handleIconInput = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, product_icon: file });

    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      setErrorMessage("Unauthorized access. Please login.");
      return;
    }

    const formData = new FormData();
    if (product.product_title.trim() !== "") {
      formData.append("product_title", product.product_title);
    }
    if (product.product_icon) {
      formData.append("product_icon", product.product_icon);
    }

    try {
      const response = await axios.post("/category", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("Category added successfully:", response.data);
        setProduct({ ...product, product_title: "", product_icon: null });
        setSuccessMessage("Category added successfully.");

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("An error occurred while adding the category.");
      }
    } catch (error) {
      // Error handling code remains the same
    }
  };

  return (
    <div className="w-[930px] h-[450px] container flex flex-col m-2 space-y-5">
      <h1 className="container text-2xl font-bold font-style hover:text-cyan-700">
        {"+ Input Category Of Product"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[80%]">
          <input
            type="text"
            name="category_title"
            placeholder="Category"
            className="p-2 rounded-lg border border-gray-300"
            value={product.product_icon}
            onChange={handleInput}
          />
        </div>

        <div className="flex flex-col w-[80%]">
          <label htmlFor="category_icon" className="mt-3 mb-1 text-gray-700">
            Category Icon (Image)
          </label>
          {/* Hidden input file button */}
          <input
            type="file"
            id="category_icon"
            name="category_icon"
            accept="image/*"
            onChange={handleIconInput}
            className="hidden"
          />
          {/* Label for the input file button */}
          <label htmlFor="category_icon" className="cursor-pointer">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="mt-2 max-w-[200px] max-h-[200px]" />
            ) : (
              <div className="border border-gray-300 p-2 rounded-lg mt-2">
                Click to upload image
              </div>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 w-32 rounded-xl p-2 text-white text-lg font-custom mt-5"
        >
          {"Upload"}
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </div>
  )
}

export default AddProduct