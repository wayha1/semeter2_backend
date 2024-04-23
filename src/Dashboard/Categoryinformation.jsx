import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import AddCategory from "./AddCategory";
import ShowCategory from "./ShowCategory";

function Categoryinformation() {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showShowCategory, setShowShowCategory] = useState(false);

  const toggleAddCategory = () => {
    setShowAddCategory(!showAddCategory);
    setShowShowCategory(false); // Ensure only one page is shown at a time
  };

  const toggleShowCategory = () => {
    setShowShowCategory(!showShowCategory);
    setShowAddCategory(false); // Ensure only one page is shown at a time
  };

  return (
    <div className="m-10 flex justify-center">
      <div className="mr-5 mb-10" style={{ width: "200px" }}>
        <Button onClick={toggleAddCategory} className="bg-green-600 w-full">
          Add To Category
        </Button>
        {/* Conditionally render the Add Category page */}
        {showAddCategory && (
          <div className="mt-10">
            <AddCategory />
          </div>
        )}
      </div>
      <div className="mb-10" style={{ width: "200px" }}>
        <Button onClick={toggleShowCategory} className="bg-red-500 w-full">
          Show Category
        </Button>
        {/* Conditionally render the Show Category page */}
        {showShowCategory && (
          <div className="mt-10">
            <ShowCategory />
          </div>
        )}
      </div>
    </div>
  );
}

export default Categoryinformation;
