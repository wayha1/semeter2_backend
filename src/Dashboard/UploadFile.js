import React, { useState } from "react";
import axios from "axios";

const UploadFile = ({ cloudName, 
  unsignedUploadPreset, 
  handleImageUpload, 
  onConfirmUpload, 
  setUploadConfirmed 
}) => {

  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleIconInput = (e) => {
    if (!showModal) {
      // Toggle showModal state if it's not already true
      setShowModal(true);
    }
    setFile(e.target.files[0]);
  };

  const handleYesClick = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", unsignedUploadPreset);
  
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
  
        if (response.status === 200) {
          const imageUrl = response.data.secure_url;
          setUploadedImageUrl(imageUrl);
          handleImageUpload(imageUrl); // Notify parent component of the uploaded image URL
          onConfirmUpload(imageUrl); // Trigger the callback to handle backend upload
          setUploadConfirmed(true);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    setFile(null);
    document.getElementById("category_icon").value = null;
  
    setShowModal(false);
    setUploadConfirmed(false); // Reset uploadConfirmed state
  };
  
  
  const handleNoClick = () => {
    setFile(null);
    setShowModal(false);
  };

  return (
    <div>
      <input
        type="file"
        id="category_icon"
        name="category_icon"
        accept="image/*"
        onChange={handleIconInput}
        className="hidden"
      />
      <label htmlFor="category_icon" className="cursor-pointer">
        <div className="border border-gray-300 p-2 rounded-lg mt-2">Click to upload image</div>
      </label>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content bg-white p-5">
              <p className="mb-4">Do you want to display the uploaded image?</p>
              <div className="flex justify-between">
                <button onClick={handleYesClick} className="modal-button p-2 bg-green-500 text-white w-[100px]">Yes</button>
                <button onClick={handleNoClick} className="modal-button bg-red-500 text-white w-[100px]">No</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {uploadedImageUrl && (
        <img src={uploadedImageUrl} alt="Uploaded" className="mt-2 max-w-[200px] max-h-[200px]" />
      )}
    </div>
  );
};

export default UploadFile;
