import axios from "axios";
import Cookies from "js-cookie";
import { default as React, useEffect, useState } from "react";

function AddVideo() {
  const [video, setVideo] = useState({
    name: "",
    link: "",
    category_id: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [categories, setCategories] = useState([]); // State to store categories data

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
  // Fetch categories data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch categories data from the API
  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category_id"
            >
              Category
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category_id"
              value={video.category_id} // Corrected from product.category_id
              onChange={
                (e) => setVideo({ ...video, category_id: e.target.value }) // Corrected from setProduct
              }
            >
              <option>Select category...</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_title}
                </option>
              ))}
            </select>
          </div>
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
          {/* Error and success messages */}
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
