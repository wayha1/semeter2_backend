import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import useAuthContext from "../context/AuthContext";

const CommentRate = ({ productId }) => {
  const [comment, setComment] = useState({
    user_id: "",
    comments: "",
  });
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useAuthContext();

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/comments");
      setComments(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
    if (user) {
      setComment((prevComment) => ({
        ...prevComment,
        user_id: user.id,
      }));
    }
  }, [user]);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/comments",
        {
          user_id: comment.user_id,
          comments: comment.comments,
          //rating: rating, // Include rating in the submission
          product_id: productId, // Include productId in the submission
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setSuccess("Comment and rating submitted successfully!");
        setComment({ user_id: user.id, comments: "" });
        setRating(0);
        setError("");
        fetchComments(); // Fetch comments again after submitting new comment
      }
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
            name="comments"
            value={comment.comments}
            onChange={handleCommentChange}
            className="w-full border border-gray-300 rounded"
            style={{ height: "150px" }}
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
              {comment.comments} - Rating: {comments.rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentRate;
