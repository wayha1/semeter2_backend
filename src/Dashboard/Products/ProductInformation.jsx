import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import ShowProduct from "./ShowProduct";
import AddProduct from "./AddProduct";

function ProductInformation() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showShowProduct, setShowShowProduct] = useState(true);
  const [activeButton, setActiveButton] = useState(null);

  const toggleAddProduct = () => {
    setShowAddProduct(true); // Always set to true when clicked
    setShowShowProduct(false); // Ensure only one page is shown at a time
    setActiveButton("add");
  };

  const toggleShowProduct = () => {
    setShowAddProduct(false);
    setShowShowProduct(true); // Ensure only one page is shown at a time
    setActiveButton("show");
  };
  
  
  return (
    <div className=" flex justify-center bg-white h-[60px] p-2">
      <div className="mr-5 mb-10" style={{ width: "400px" }}>
        <Button
          onClick={toggleAddProduct}
          className={`w-full ${activeButton === "add" ? "bg-green-600" : "bg-green-400"}`}
        >
          Add To Category
        </Button>
        {/* Conditionally render the Add Category page */}
        {showAddProduct && (
          <div className="mt-10" style={{ position: "relative", transform: "translateX(-10%)" }}>
            <AddProduct/>
          </div>
        )}
      </div>
      <div className="mb-10" style={{ width: "400px" }}>
        <Button
          onClick={toggleShowProduct}
          className={`w-full ${activeButton === "show" ? "bg-red-500" : "bg-red-400"}`}
        >
          Show Category
        </Button>
        {/* Conditionally render the Show Category page */}
        {showShowProduct && (
          <div className="mt-10 " style={{ position: "relative", transform: "translateX(-120%) " }}>
            <ShowProduct/>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductInformation