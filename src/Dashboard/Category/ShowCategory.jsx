import React, { useState, useEffect } from "react";
import axios from "../../Components/api/axios";
import Cookies from "js-cookie";
import ModelEdit from '../Category/Modal/ModelEdit';

function ShowCategory() {
  const [categoryData, setCategoryData] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategoryData(response.data.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setCategoryData([]);
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (categoryId) => {
    try {
      const token = Cookies.get("token");
      await axios.delete(`/category/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Assuming success, you may want to update the UI by refetching the data
      fetchData();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };


  return (
    <div className="p-10 w-[850px] h-screen">
      <h2 className="text-xl font-bold mb-4">Category Information</h2>
      <div className="overflow-y-auto ">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="flex items-center border border-gray-300 bg-white p-10 mb-6 h-[180px] w-full justify-evenly"
          >
            <div className="mr-10 ">
              <img
                src={category.category_icon}
                alt={category.category_title}
                className="mr-6 border-2 w-[100px] h-[100px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <div className="text-lg">Category </div>
                <div className="text-lg text-blue-500">{category.category_title}</div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(category)}
                  className="btn-blue bg-green-400 px-2 py-1 rounded-lg text-white hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                onClick={() => handleDelete(category.id)}
                  className="btn-blue bg-red-600 px-2 py-1 rounded-lg text-white hover:bg-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <ModelEdit category={editingCategory} handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default ShowCategory;
