import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function AddVideo() {
  const [video, setVideo] = useState({
    video_title1: "",
    video1: "",
    category_id: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [categories, setCategories] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }

      const respone = await axios.post("http://127.0.0.1:8000/api/video", {
        video_title1: video.video_title1,
        video1: video.video1,
        category_id: video.category_id,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(respone)
      if(respone.status === 200){
        setSuccessMessage("Video added successfully!");
      }
      setVideo({ video_title1: "", video1: "", category_id: "" });
    } catch (error) {
      console.error("Error adding video:", error);
      setErrorMessage("Failed to add video. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get("http://127.0.0.1:8000/api/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setCategories([]);
    }
  };

  return (
    <div className="h-screen">
      <div className="w-full mt-8 p-8 border rounded shadow bg-white">
        <h2 className="text-lg font-semibold mb-4">Add Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category_id">Category</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category_id"
              value={video.category_id}
              onChange={(e) => setVideo({ ...video, category_id: e.target.value })}
            >
              <option>Select category...</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.category_title}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="name">Video Name</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              id="video_title1"
              type="text"
              placeholder="Enter Video Name"
              name="video_title1"
              value={video.video_title1}
              onChange={handleInput}           
              />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-semibold mb-2" htmlFor="link">Video Link (YouTube or TikTok)</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              id="video1"
              type="text"
              name="video1"
              placeholder="Enter Video Link"
              value={video.video1}
              onChange={handleInput}
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Video
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddVideo;
