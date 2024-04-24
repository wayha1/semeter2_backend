import React from "react";
import Branding from "../Components/Home/Branding";
import Home from "../Components/Home/Home";
import Products from "../Components/Home/Products";
import Video from "../Components/Home/Video";
function Homepage() {
  return (
    <>
      <Home />
      {/* <Search /> */}
      {/* <Categories /> */}
      <Branding />
      <Products />
      <Video/>
    </>
  );
}

export default Homepage;
