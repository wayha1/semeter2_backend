import React, { useEffect, useState } from "react";
import axios from "../../Components/api/axios";
import ModalDelete from "../ModalDelete";
import ModelEdit from "../ModelEdit";
// import useAuthContext from "./../Components/context/AuthContext"; // Import the useAuthContext hook
import Cookies from "js-cookie";

function UserTable() {
  // const { user } = useAuthContext();
  const [userData, setUserData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [deleting, setDeletingUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: "/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("Response:", response.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData([]);
    }
  };

  console.log("userData:", userData);

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = (user) => {
    setDeletingUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingUser(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingUser(null);
  };

  return (
    <div className="container mx-auto w-full h-screen">
      <h1 className="text-xl font-bold mb-4 pt-10 text-black p-2 text-center">
        Users Information
      </h1>
      <table className="table-auto w-full border-collapse border border-gray-500">
        <thead>
          <tr className="bg-blue-300">
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
          {userData.map((data) => (
            <tr key={data.id}>
              <td className="border border-gray-500 p-2">{data.id}</td>
              <td className="border border-gray-500 p-2">{data.name}</td>
              <td className="border border-gray-500 p-2">{data.email}</td>
              <td className="border border-gray-500 p-2">
                {data.email_verified_at || "null"}
              </td>
              <td className="border border-gray-500 p-2">
                {data.google_id || "null"}
              </td>
              <td className="border border-gray-500 p-2">{data.gender}</td>
              <td className="border border-gray-500 p-2">{data.is_active}</td>
              <td className="border border-gray-500 p-2">
                {data.user_image || "null"}
              </td>
              <td className="border border-gray-500 p-2">
                {data.phone_number || "null"}
              </td>
              <td className="border border-gray-500 p-2">
                {data.user_address || "null"}
              </td>
              <td className="border border-gray-500 p-2">{data.status}</td>
              <td className="border border-gray-500 p-2">{data.created_at}</td>
              <td className="border border-gray-500 p-2">{data.updated_at}</td>
              <td className=" border-gray-500 p-2 flex">
                <button
                  onClick={() => handleEdit(data)}
                  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(data)}
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
      {isEditModalOpen && (
        <ModelEdit user={editingUser} handleCloseModal={handleCloseEditModal} />
      )}

      {/* ModalDelete component */}
      {isDeleteModalOpen && (
        <ModalDelete
          user={deleting}
          handleCloseModal={handleCloseDeleteModal}
        />
      )}
    </div>
  );
}

export default UserTable;
