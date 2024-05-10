import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from "../../Components/api/axios";

function ShowVideo() {
  const [VideoData, setVideoData] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get("/video", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setVideoData(response.data.data);
    } catch (error) {
      console.error("Error fetching Video data:", error);
      setVideoData([]);
    }
  };

  const handleEdit = (VideoId) => {
    console.log("Editing Video with ID:", VideoId);
  };

  const handleDelete = async (VideoId) => {
    try {
      const token = Cookies.get("token");
      console.log("Deleting Video with ID:", VideoId);
      const response = await axios.delete(`/video/${VideoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Delete response:", response.data);
      // After successful deletion, fetch data again to update the UI
      fetchData();
    } catch (error) {
      console.error("Error deleting Video:", error);
    }
  };

  return (
    <div className="p-10 w-[900px] h-screen">
      <h2 className="text-xl font-bold mb-4">Video Information</h2>
      <div className="overflow-y-auto ">
        {VideoData.map((Video) => (
          <div
            key={Video.id}
            className="flex items-center border border-gray-300 bg-white p-10 mb-6 w-[100%]"
          >
            <div className="flex ml-10 w-[50%] ">
              {/* Left side with Video_icon */}
              {/* <img src="{{ $Video_icon }}" /> */}
              <img
                src={Video.Video_image}
                alt={Video.Video_title}
                className="mr-6 border-2 w-[150px] h-[150px]"
              />
            </div>
            <div className="flex flex-col w-[50%] ">
              {/* Right side with Video title, created at, and updated at */}
              <div className="mb-2 ">
                <h1 className="text-lg uppercase">Video </h1>
                <h2 className="text-lg text-blue-500">{Video.Video_name}</h2>
                <h1 className="text-lg uppercase">Video Description</h1>
                <h2 className="text-lg text-blue-500 ">
                  {Video.Video_description}
                </h2>
                <h1 className="text-lg uppercase">Video stock</h1>
                <h2 className="text-lg text-blue-500 ">{Video.Video_stock}</h2>
                <h1 className="text-lg uppercase">Video link review</h1>
                <a href={Video.Video_review} className="text-lg text-blue-500 ">
                  {Video.Video_review}
                </a>

                {/* <div className="text-sm">Created At: {Video.created_at}</div>
                <div className="text-sm">Updated At: {Video.updated_at}</div> */}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(Video.id)}
                  className="btn-blue bg-green-400 px-2 py-1 rounded-lg text-white hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(Video.id)}
                  className="btn-red bg-red-400 px-2 py-1 rounded-lg text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowVideo;
