import React, { useState } from "react";
import axios from "../Components/api/axios";

function AddCategory() {
  const [category, setCategory] = useState({
    category_title: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    e.persist();
    setCategory({ ...category, [e.target.name]: e.target.value });
    // Clear the error and success messages when the category title is changed
    if (e.target.name === "category_title") {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setErrorMessage("Unauthorized access. Please login.");
      return;
    }

    const formData = new FormData();
    if (category.category_title.trim() !== "") {
      formData.append("category_title", category.category_title);
    }

    try {
      const response = await axios.post("/category", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        console.log("Category added successfully:", response.data);
        setCategory({ ...category, category_title: "" });
        setSuccessMessage("Category added successfully.");

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("An error occurred while adding the category.");
      }
    } catch (error) {
      // Error handling code remains the same
    }
  };

  return (
    <div className="w-[930px] h-[450px] container flex flex-col m-2 space-y-5">
      <h1 className="container text-2xl font-bold font-style hover:text-cyan-700">
        {"+ Input Category Of Product"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[80%] ">
          <input
            type="text"
            name="category_title"
            placeholder="Category"
            className="p-2 rounded-lg"
            value={category.category_title}
            onChange={handleInput}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 w-32 rounded-xl p-2 text-white text-lg font-custom mt-5"
        >
          {"Upload"}
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </form>
    </div>
  );
}

export default AddCategory;
