import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UploadFile from "../UploadFile";

function AddCategory() {
  const [category, setCategory] = useState({
    category_title: "",
    category_icon: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploadConfirmed, setUploadConfirmed] = useState(false); 

  const cloudName = "ds9ccmtdq";
  const unsignedUploadPreset = "ntrpox3d";

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setCategory({ ...category, category_title: "", category_icon: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
    if (name === "category_title") {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const handleImageUpload = (imageUrl) => {
    setCategory({ ...category, category_icon: imageUrl });
  };

  const handleConfirmUpload = async (imageUrl) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }
      const categoryResponse = await axios.post(
        "/category",
        {
          category_title: category.category_title,
          category_icon: imageUrl, // Pass the uploaded image URL
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Set success message
      setSuccessMessage("Category added successfully.");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the category.");
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!category.category_title || !category.category_icon) {
      setErrorMessage("Please provide both category title and icon.");
      return;
    }
  
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }
  
      // Send category data to your backend server
      const categoryResponse = await axios.post(
        "http://127.0.0.1:8000/api/category",
        {
          category_title: category.category_title,
          category_icon: category.category_icon,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Check if the category was successfully added
      if (categoryResponse.status === 200) {
        setSuccessMessage("Category added successfully.");
        // Clear category data and reset upload confirmation state
        setCategory({ category_title: "", category_icon: "" });
        setUploadConfirmed(false);
      } else {
        // If there was an issue with the request, display an error message
        setErrorMessage("Failed to add category. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the category.");
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
            value={category.category_title}
            onChange={handleInput}
          />
        </div>

        <div className="flex flex-col w-[80%]">
          <UploadFile
            cloudName={cloudName}
            unsignedUploadPreset={unsignedUploadPreset}
            handleImageUpload={handleImageUpload}
            onConfirmUpload={handleConfirmUpload} // Pass the callback function
            setUploadConfirmed={setUploadConfirmed} // Pass the state setter function
          />
        </div>

        <button
          type="button" // Change the type to "button"
          onClick={handleSubmit} // Bind handleSubmit function to onClick event
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 w-32 rounded-xl p-2 text-white text-lg font-custom mt-5"
        >
          {"Upload"}
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </div>
  );
}

export default AddCategory;
