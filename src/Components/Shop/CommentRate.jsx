import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "../api/axios";

const CommentRate = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/product/comments/${productId}`);
      setComments(response.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      await axios.post(
        "/product/comment-rate",
        {
          productId,
          rating,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Comment and rating submitted successfully!");
      setError("");
      setRating(0);
      setComment("");
      fetchComments(); // Fetch comments again after submitting new comment
    } catch (error) {
      setError("Failed to submit comment and rating.");
      setSuccess("");
    }
  };

  return (
    <div className="w-full mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="flex items-center">
          <span className="mr-2">Rating:</span>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`cursor-pointer ${
                index < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRatingClick(index + 1)}
            />
          ))}
        </div>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={handleCommentChange}
            className="w-full border border-gray-300 rounded"
            style={{ height: "150px" }} // Adjust the height value as needed
          />
        </label>
        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {/* Display Comments */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentRate;
