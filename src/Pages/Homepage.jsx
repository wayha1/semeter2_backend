import React from "react";
import Branding from "../Components/Home/Branding";
import Home from "../Components/Home/Home";
// import Products from "../Components/Home/Products";
import BestProducts from "../Components/Home/BestProducts";
import Video from "../Components/Home/Video";
import Payment from "./Payment";
function Homepage() {
  return (
    <>
      <Home />
      {/* <Search /> */}
      {/* <Categories /> */}
      <Branding />
      <BestProducts />
      {/* <Products /> */}
      <Video />
      <Payment />
    </>
  );
}

export default Homepage;
