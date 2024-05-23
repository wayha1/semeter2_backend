import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import AddBrand from "./AddBrand";
import ShowBrand from "./ShowBrand";
// import Cookies from "js-cookie";

function Brandinformation() {
  const [showAddBrand, setShowAddBrand] = useState(false);
  const [showShowBrand, setShowShowBrand] = useState(true);
  const [activeButton, setActiveButton] = useState(null);

  const toggleAddBrand = () => {
    setShowAddBrand(true); // Always set to true when clicked
    setShowShowBrand(false); // Ensure only one page is shown at a time
    setActiveButton("add");
  };

  const toggleShowBrand = () => {
    setShowShowBrand(true);
    setShowAddBrand(false); // Ensure only one page is shown at a time
    setActiveButton("show");
  };

  return (
    <div className=" flex justify-center w-full h-auto pt-10 p-2">
      <div className="mr-5 mb-10" style={{ width: "400px" }}>
        <Button
          onClick={toggleAddBrand}
          className={`w-full ${activeButton === "add" ? "bg-green-600" : "bg-green-400"}`}
        >
          Add To Brand
        </Button>
        {/* Conditionally render the Add Brand page */}
        {showAddBrand && (
          <div className="mt-10" style={{ position: "relative", transform: "translateX(-10%)" }}>
            <AddBrand />
          </div>
        )}
      </div>
      <div className="mb-10" style={{ width: "400px" }}>
        <Button
          onClick={toggleShowBrand}
          className={`w-full ${activeButton === "show" ? "bg-red-500" : "bg-red-400"}`}
        >
          Show Brand
        </Button>
        {/* Conditionally render the Show Brand page */}
        {showShowBrand && (
          <div className="mt-10 " style={{ position: "relative", transform: "translateX(-120%) " }}>
            <ShowBrand />
          </div>
        )}
      </div>
    </div>
  );
}

export default Brandinformation;
