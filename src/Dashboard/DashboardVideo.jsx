// Dashboard.js

import axios from "axios";
import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const Dashboard = () => {
  const [videoLink, setVideoLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/videos", { videoLink });
      alert("Video added successfully!");
      setVideoLink("");
    } catch (error) {
      console.error("Error adding video:", error);
      alert("Failed to add video. Please try again later.");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Add YouTube Video</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="Enter YouTube Video Link"
            className="w-full border rounded px-3 py-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Video
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
