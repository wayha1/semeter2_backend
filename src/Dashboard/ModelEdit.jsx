import React, { useState } from 'react';
import axios from '../Components/api/axios';

function ModelEdit({user, handleCloseModal }) {
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [updatedUser, setUpdatedUser] = useState({
    ID: user.id || '',
    nameUser: user.name || '',
    emailUser: user.email || '',
    emailVerifiedAt: user.email_verified_at !== undefined ? user.email_verified_at : null, 
    googleID: user.google_id !== undefined ? user.google_id : null,
    Gender: user.gender || '',
    IsActive: user.is_active !== undefined ? user.is_active : 0,
    phoneNumberUser: user.phone_number !== undefined ? user.phone_number : null,
    userAddress: user.user_address !== undefined ? user.user_address : null,
  });

  // Function to handle changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  // Function to handle saving the edited user data
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.request({
        url: `/profile/${user.id}`, // Assuming your endpoint for updating user data is /profile/:id
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: updatedUser, // Send the updated user data in the request body
      });
  
      if (response.status === 200) {
        // Data successfully updated
        console.log('User data updated successfully.');
        // You might want to update the user state in your application here
      } else {
        // Error while updating data
        console.error('Failed to update user data.');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
    // Close the modal after saving
    handleCloseModal();
  };
  

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[1200px] sm:w-full">
          <h3 className="text-lg font-medium text-gray-900 text-center mt-5">Edit User</h3>
          <div className="bg-white ml-20 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-3 gap-">
          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">ID :</label>
            <input type="text" name="ID" value={updatedUser.ID} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1
            block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">Name :</label>
            <input type="text" name="nameUser" value={updatedUser.nameUser} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">Email :</label>
            <input type="text" name="emailUser" value={updatedUser.emailUser} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">email_verified_at :</label>
            <input type="text" name="emailVerifiedAt" value={updatedUser.emailVerifiedAt} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">google_id :</label>
            <input type="text" name="googleID" value={updatedUser.googleID} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">Gender :</label>
            <input type="text" name="Gender" value={updatedUser.Gender} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">is_active :</label>
            <input type="text" name="IsActive" value={updatedUser.IsActive} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">phone_number :</label>
            <input type="text" name="phoneNumberUser" value={updatedUser.phoneNumberUser} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>

          <div className="mt-2">
            {/* Form fields for editing user data */}
            <label className="block text-sm font-medium text-gray-700">user_address :</label>
            <input type="text" name="userAddress" value={updatedUser.userAddress} onChange={handleInputChange} className="mt-1 focus:ring-indigo-500 
            focus:border-indigo-500 p-1 block w-[300px] shadow-sm border-2"/>
          </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={handleCloseModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
            <button type="button" 
            onClick={handleSave}
            className="w-full 
            inline-flex justify-center rounded-md border 
            border-gray-300 shadow-sm px-4 py-2 bg-green-500 
            text-base font-medium text-white
            focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelEdit;
