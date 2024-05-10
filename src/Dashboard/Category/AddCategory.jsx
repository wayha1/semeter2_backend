// AddCategory.js
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UploadFile from "../UploadFile";

function AddCategory() {
  const [category, setCategory] = useState({
    category_title: "",
    category_icon: "",
  });
  const [uploadConfirmed, setUploadConfirmed] = useState(false); // State to track upload confirmation
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [file, setFile] = useState(null); // State to store selected file

  const cloudName = "ds9ccmtdq";
  const unsignedUploadPreset = "ntrpox3d";

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
    if (name === "category_title") {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const handleImageUpload = (imageUrl) => {
    // This function is called when the file is uploaded
    setCategory({ ...category, category_icon: imageUrl });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!category.category_title || !file) {
    //   setErrorMessage("Please provide both category title and icon.");
    //   return;
    // }

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
        // Clear category data
        setCategory({ category_title: "", category_icon: "" });
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
            section="category_icon"
            handleImageUpload={(imageUrl) => setCategory({ ...category, category_icon: imageUrl })}
            handleIconUpload={(imageUrl) => setCategory({ ...category, category_icon: imageUrl })}
            cloudName={cloudName}
            unsignedUploadPreset={unsignedUploadPreset}
            onConfirmUpload={handleSubmit}
            setUploadConfirmed={setUploadConfirmed}
          />
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
  );
}

export default AddCategory;
