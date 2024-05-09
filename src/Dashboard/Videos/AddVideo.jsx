import axios from "axios";
import React, { useState } from "react";

function AddVideo() {
  const [video, setVideo] = useState({
    name: "",
    link: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/videos", video);
      alert("Video added successfully!");
      setVideo({ name: "", link: "" });
    } catch (error) {
      console.error("Error adding video:", error);
      alert("Failed to add video. Please try again later.");
    }
  };

  return (
    <div className="h-screen">
      <div className="w-full mt-8 p-8 border rounded shadow bg-white">
        <h2 className="text-lg font-semibold mb-4">Add Video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-800 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Video Name
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              placeholder="Enter Video Name"
              value={video.name}
              onChange={(e) => setVideo({ ...video, name: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-800 text-sm font-semibold mb-2"
              htmlFor="link"
            >
              Video Link (YouTube or TikTok)
            </label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              id="link"
              type="text"
              placeholder="Enter Video Link"
              value={video.link}
              onChange={(e) => setVideo({ ...video, link: e.target.value })}
            />
          </div>
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
