// ProductCard.js

import React, { useEffect, useState } from "react";
import Filter from "./FilterSearch";

const ProductCard = () => {
  return(
    <div>
      <h1 className="font-bold text-4xl mb-4 flex items-center justify-center pt-10 w-full">
          Listing Product
        </h1>
        <Filter/>
        <p className="flex items-center justify-center pb-10 w-full">
          Find your perfect skincare match by exploring options based on your
          skin type, preferences, and budget.
        </p>
    </div>
  );
};

export default ProductCard;
