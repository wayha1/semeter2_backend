import React, { useState, useEffect } from "react";
import axios from "axios";
import ModelEdit from "./ModelEdit";
import ModalDelete from "./ModalDelete";
import useAuthContext from "./../Components/context/AuthContext"; // Import the useAuthContext hook

function UserTable() {
  const { user } = useAuthContext(); 
  const [userData, setUserData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [deleting, setDeletingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      fetchData(user.token);
    }
  }, [user]);

  const fetchData = async (token) => {
    try {
      console.log("Fetching data...");
      const response = await axios.get("http://127.0.0.1:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setUserData(response.data.data);
    }  catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (user) => {
    setDeletingUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    setDeletingUser(null);
  };

  return (
    <div className="container mx-auto w-full dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-xl font-bold mb-4 text-white p-2 text-center">Users Information</h1>
      <table className="table-auto w-full border-collapse border border-gray-500">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-700 p-2">ID</th>
            <th className="border border-gray-700 p-2">Name</th>
            <th className="border border-gray-700 p-2">Email</th>
            <th className="border border-gray-700 p-2">Email Verified At</th>
            <th className="border border-gray-700 p-2">Google ID</th>
            <th className="border border-gray-700 p-2">Gender</th>
            <th className="border border-gray-700 p-2">Is Active</th>
            <th className="border border-gray-700 p-2">User Image</th>
            <th className="border border-gray-700 p-2">Phone Number</th>
            <th className="border border-gray-700 p-2">User Address</th>
            <th className="border border-gray-700 p-2">Status</th>
            <th className="border border-gray-700 p-2">Created At</th>
            <th className="border border-gray-700 p-2">Updated At</th>
            <th className="border border-gray-700 p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="p-2 text-center text-black">
          {userData.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-500 p-2 ">{user.id}</td>
              <td className="border border-gray-500 p-2">{user.name}</td>
              <td className="border border-gray-500 p-2">{user.email}</td>
              <td className="border border-gray-500 p-2">{user.email_verified_at || "null"}</td>
              <td className="border border-gray-500 p-2">{user.google_id || "null"}</td>
              <td className="border border-gray-500 p-2">{user.gender}</td>
              <td className="border border-gray-500 p-2">{user.is_active}</td>
              <td className="border border-gray-500 p-2">{user.user_image || "null"}</td>
              <td className="border border-gray-500 p-2">{user.phone_number || "null"}</td>
              <td className="border border-gray-500 p-2">{user.user_address || "null"}</td>
              <td className="border border-gray-500 p-2">{user.status}</td>
              <td className="border border-gray-500 p-2">{user.created_at}</td>
              <td className="border border-gray-500 p-2">{user.updated_at}</td>
              <td className="border border-gray-500 p-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mr-2"
                >
                  Edit
                </button>
                {/* Delete button */}
                <button
                  onClick={() => handleDelete(user)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* ModelEdit component */}
      {isModalOpen && <ModelEdit user={editingUser} handleCloseModal={handleCloseModal} />}

      {isModalOpen && <ModalDelete user={deleting} handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default UserTable;
