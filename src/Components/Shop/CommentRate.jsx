import React, { useState } from "react";
import axios from "../api/axios";
import Cookies from "js-cookie";

const CommentRate = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRatingChange = (e) => {
    setRating(e.target.value);
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
        <label>
          Rating:
          <select
            value={rating}
            onChange={handleRatingChange}
            className="ml-2 border border-gray-300 rounded"
          >
            <option value="0">Select rating</option>
            {[...Array(5)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={handleCommentChange}
            className="ml-2 w-full border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentRate;
