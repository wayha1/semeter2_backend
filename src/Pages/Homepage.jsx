import React from "react";
import Branding from "../Components/Home/Branding";
import Home from "../Components/Home/Home";
import Products from "../Components/Home/Products";
function Homepage() {
  return (
    <>
      <Home />
      {/* <Search /> */}
      {/* <Categories /> */}
      <Branding />
      <Products />
    </>
  );
}

export default Homepage;
