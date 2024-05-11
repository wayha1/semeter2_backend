import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import axios from "../../Components/api/axios";

function ShowVideo() {
  const [videoData, setVideoData] = useState([]);
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
      console.error("Error fetching video data:", error);
      setVideoData([]);
    }
  };

  const handleEdit = (videoId) => {
    console.log("Editing video with ID:", videoId);
  };

  const handleDelete = async (videoId) => {
    try {
      const token = Cookies.get("token");
      console.log("Deleting video with ID:", videoId);
      const response = await axios.delete(`/video/${videoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Delete response:", response.data);
      // After successful deletion, fetch data again to update the UI
      fetchData();
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div className="p-10 w-[900px] h-screen">
      <h2 className="text-xl font-bold mb-4">Video Information</h2>
      <div className="overflow-y-auto">
        {videoData.map((video) => (
          <div
            key={video.id}
            className="flex items-center border border-gray-300 bg-white p-10 mb-6 w-[100%]"
          >
            <div className="flex ml-10 w-[50%]">
              {/* Left side with video icon */}
              <iframe
                className="mr-6 border-2 w-[300px] h-[300px]"
                src={video.video_link}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col w-[50%]">
              {/* Right side with video title, created at, and updated at */}
              <div className="mb-2">
                <h1 className="text-lg">Video Title: </h1>
                <h2 className="text-lg text-bold">{video.video_title}</h2>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(video.id)}
                  className="btn-blue bg-green-400 px-2 py-1 rounded-lg text-white hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(video.id)}
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
