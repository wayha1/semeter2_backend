import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UploadFile from "../UploadFile";

function Addbrand() {
  const [brand, setBrand] = useState({
    brand: "",
    brand_icons: "",
  });
  const [uploadConfirmed, setUploadConfirmed] = useState(false); // State to track upload confirmation
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const cloudName = "ds9ccmtdq";
  const unsignedUploadPreset = "ntrpox3d";

  const handleInput = (event) => {
    const { name, value } = event.target;
    setBrand({ ...brand, [name]: value });
    if (name === "brand") {
      setErrorMessage("");
      setSuccessMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!brand.brand || !brand.brand_icons) {
      setErrorMessage("Please provide both brand title and image.");
      return;
    }

    try {
      const token = Cookies.get("token");
      if (!token) {
        setErrorMessage("Unauthorized access. Please login.");
        return;
      }

      // Send brand data to your backend server
      const brandResponse = await axios.post(
        "https://backend.skinme.site:8000/api/brand",
        {
          brand: brand.brand,
          brand_icons: brand.brand_icons, 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check if the brand was successfully added
      if (brandResponse.status === 201) {
        setSuccessMessage("Brand added successfully.");
        // Clear brand data
        setBrand({ brand: "", brand_icons: "" });
      } else {
        // If there was an issue with the request, display an error message
        setErrorMessage("Failed to add brand. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while adding the brand.");
    }
  };

  return (
    <div className="w-[930px] h-[450px] container flex flex-col m-2 space-y-5">
      <h1 className="container text-2xl font-bold font-style hover:text-cyan-700">
        {"+ Input Brand Of Product"}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-[80%]">
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            className="p-2 rounded-lg border border-gray-300"
            value={brand.brand}
            onChange={handleInput}
          />
        </div>

        <div className="flex flex-col w-[80%]">
          <UploadFile
            section="product_brand"
            handleImageUpload={(imageUrl) => setBrand({ ...brand, brand_icons: imageUrl })}
            handleIconUpload={(imageUrl) => setBrand({ ...brand, brand_icons: imageUrl })}
            cloudName={cloudName}
            unsignedUploadPreset={unsignedUploadPreset}
            onConfirmUpload={handleSubmit}
            setUploadConfirmed={setUploadConfirmed}
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

export default Addbrand;
