import React, { useState, useEffect } from 'react';
import axios from '../../../Components/api/axios';
import Cookies from 'js-cookie';
import UploadFile from "../../../Dashboard/UploadFile";

function ModelEdit({ brand, handleCloseModal }) {
  const [brandImage, setBrandImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [brandName, setBrandName] = useState(brand?.brand || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [uploadConfirmed, setUploadConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cloudName = "ds9ccmtdq";
  const unsignedUploadPreset = "ntrpox3d";

  useEffect(() => {
    setBrandName(brand?.brand || "");
  }, [brand]);

  const handleImageUpload = (imageUrl) => {
    setBrandImage(imageUrl);
  };

  const handleConfirmUpload = async (imageUrl) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }
  
      const response = await axios.put(`/brand/${brand.id}`, {
        brand: brandName,
        brand_icons: imageUrl,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setSuccessMessage("Brand updated successfully.");
      
      setImagePreview(imageUrl);
  
      setTimeout(() => {
        handleCloseModal();
        setSuccessMessage("");
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while updating the brand.");
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (uploadConfirmed) {
      setBrandImage(null);
      setUploadConfirmed(false);
      setShowModal(false);
    }
  };

  const handleYesClick = () => {
    setUploadConfirmed(true);
    setShowModal(false);
  };

  const handleNoClick = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full">
          <h3 className="text-lg font-medium text-gray-900 text-center mt-5">Edit Brand</h3>
          <div className="p-6">
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Image:</label>
              <UploadFile
                cloudName={cloudName}
                unsignedUploadPreset={unsignedUploadPreset}
                handleImageUpload={handleImageUpload}
                onConfirmUpload={handleConfirmUpload}
                setUploadConfirmed={setUploadConfirmed}
                setShowModal={setShowModal}
              />
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-2 max-w-[200px] max-h-[200px]" />
              )}
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
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
