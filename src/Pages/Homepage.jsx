import React from "react";
import Categories from "../Components/Home/Categories";
import Home from "../Components/Home/Home";
import Products from "../Components/Home/Products";
import Search from "../Components/Home/Search";
function Homepage() {
  return (
    <>
      <Home />
      <Search />
      <Categories />
      <Products />
    </>
  );
}

export default Homepage;
