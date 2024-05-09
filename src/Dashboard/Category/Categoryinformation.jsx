import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import AddCategory from "./AddCategory";
import ShowCategory from "./ShowCategory";
// import Cookies from "js-cookie";

function Categoryinformation() {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showShowCategory, setShowShowCategory] = useState(true);
  const [activeButton, setActiveButton] = useState(null);

  const toggleAddCategory = () => {
    setShowAddCategory(true); // Always set to true when clicked
    setShowShowCategory(false); // Ensure only one page is shown at a time
    setActiveButton("add");
  };

  const toggleShowCategory = () => {
    setShowShowCategory(true);
    setShowAddCategory(false); // Ensure only one page is shown at a time
    setActiveButton("show");
  };

  return (
    <div className=" flex justify-center w-full h-auto pt-10 p-2">
      <div className="mr-5 mb-10" style={{ width: "400px" }}>
        <Button
          onClick={toggleAddCategory}
          className={`w-full ${activeButton === "add" ? "bg-green-600" : "bg-green-400"}`}
        >
          Add To Category
        </Button>
        {/* Conditionally render the Add Category page */}
        {showAddCategory && (
          <div className="mt-10" style={{ position: "relative", transform: "translateX(-10%)" }}>
            <AddCategory />
          </div>
        )}
      </div>
      <div className="mb-10" style={{ width: "400px" }}>
        <Button
          onClick={toggleShowCategory}
          className={`w-full ${activeButton === "show" ? "bg-red-500" : "bg-red-400"}`}
        >
          Show Category
        </Button>
        {/* Conditionally render the Show Category page */}
        {showShowCategory && (
          <div className="mt-10 " style={{ position: "relative", transform: "translateX(-120%) " }}>
            <ShowCategory />
          </div>
        )}
      </div>
    </div>
  );
}

export default Categoryinformation;
