import React from "react";
import Categories from "../Components/Home/Categories";
import Home from "../Components/Home/Home";
import Products from "../Components/Home/Products";
function Homepage() {
  return (
    <>
      <Home />
      {/* <Search /> */}
      <Categories />
      <Products />
    </>
  );
}

export default Homepage;
