import React, { useState, useEffect } from 'react';
import axios from '../../../Components/api/axios';
import Cookies from 'js-cookie';

function ModelEdit({ category, handleCloseModal }) {
  const [categoryImage, setCategoryImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(category.category_title);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setCategoryTitle(category.category_title);
  }, [category]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCategoryImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNameChange = (e) => {
    setCategoryTitle(e.target.value);
  };

  const handleSave = async () => {
    try {
      const token = Cookies.get("token");
  
      const formData = new FormData();
      formData.append('category_icon', categoryImage);
      formData.append('category_title', categoryTitle);
  
      const response = await axios.put(`/category/${category.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Update the category title in the state after successful update
      setCategoryTitle(response.data.category.category_title);
  
      // Handle successful response
      console.log('Category updated successfully:', response.data);
      setSuccessMessage("Category updated successfully.");
  
      setTimeout(() => {
        handleCloseModal();
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error('Error updating category:', error);
      setErrorMessage("An error occurred while updating the category.");
    }
  };
  

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-3xl sm:w-full">
          <h3 className="text-lg font-medium text-gray-900 text-center mt-5">Edit Category</h3>
          <div className="p-6">
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Image:</label>
              <input
                type="file"
                name="category_icon"
                onChange={handleImageChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-1 block w-full shadow-sm border-gray-300 rounded-md"
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
                onChange={handleNameChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-1 block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSave}
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
