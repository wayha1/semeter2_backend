import React, { useState } from 'react';
import axios from 'axios'; // Import axios if you're using it
import Cookies from 'js-cookie'; // Import Cookies if you're using it

function ModelEdit({ category, handleCloseModal }) {
  const [editedCategory, setEditedCategory] = useState(category);
  const [imagePreview, setImagePreview] = useState(null); // State to store image preview URL
  const [categoryImage, setCategoryImage] = useState(null); // New state to hold the image file
  const [categoryName, setCategoryName] = useState(category.name); // State to hold the edited category name

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCategoryImage(file);
  
    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSave = async () => {
    try {
      // Create form data to send in the PUT request
      const formData = new FormData();
      formData.append('category_icon', categoryImage);
      formData.append('name', categoryName);
      const token = Cookies.get("token");
      // Send PUT request to update the category
      const response = await axios.put(`/category/${editedCategory.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          // Add any additional headers like authorization if needed
        },
      });
      
      // Handle successful response
      console.log('Category updated successfully:', response.data);
      
      // Close the modal
      handleCloseModal();
    } catch (error) {
      // Handle error
      console.error('Error updating category:', error);
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
                value={categoryName}
                onChange={handleNameChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-1 block w-full shadow-sm border-gray-300 rounded-md"
              />
            </div>
            {/* Add more form fields for editing category properties */}
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
