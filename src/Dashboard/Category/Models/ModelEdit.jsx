import React, { useState, useEffect } from 'react';
import axios from '../../../Components/api/axios';
import Cookies from 'js-cookie';
import UploadFile from "../../../Dashboard/UploadFile";

function ModelEdit({ category, handleCloseModal }) {
  const [categoryImage, setCategoryImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(category.category_title);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploadConfirmed, setUploadConfirmed] = useState(false); // Ensure initial state is false
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility
  const cloudName = "ds9ccmtdq";
  const unsignedUploadPreset = "ntrpox3d";

  useEffect(() => {
    setCategoryTitle(category.category_title);
  }, [category]);

  const handleImageUpload = (imageUrl) => {
    setCategoryImage(imageUrl);
  };

  const handleConfirmUpload = async (imageUrl) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }
  
      const response = await axios.put(`/category/${category.id}`, {
        category_title: categoryTitle,
        category_icon: imageUrl, // Pass the uploaded image URL
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setSuccessMessage("Category updated successfully.");
      
      // Update the imagePreview state with the new image URL
      setImagePreview(imageUrl);
  
      setTimeout(() => {
        handleCloseModal();
        setSuccessMessage("");
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while updating the category.");
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (uploadConfirmed) {
      setCategoryImage(null); // Clear the image state
      setUploadConfirmed(false);
      setShowModal(false); // Close the modal
    }
  };

  const handleYesClick = () => {
    // Handle 'Yes' button click
    setUploadConfirmed(true); // Confirm upload
    setShowModal(false); // Close the modal
  };

  const handleNoClick = () => {
    // Handle 'No' button click
    setShowModal(false); // Close the modal
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full">
          <h3 className="text-lg font-medium text-gray-900 text-center mt-5">Edit Category</h3>
          <div className="p-6">
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Image:</label>
              <UploadFile
                cloudName={cloudName}
                unsignedUploadPreset={unsignedUploadPreset}
                handleImageUpload={handleImageUpload}
                onConfirmUpload={handleConfirmUpload}
                setUploadConfirmed={setUploadConfirmed}
                setShowModal={setShowModal} // Pass setShowModal to handle modal visibility
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-2 max-w-[200px] max-h-[200px]" />
              )}
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                value={categoryTitle}
                onChange={(e) => setCategoryTitle(e.target.value)}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-1 block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSubmit}
              className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              onClick={handleCloseModal}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelEdit;
