import React from "react";
import Shop from "../../src/Components/Shop/Shop";
import Product from "../Components/Shop/Product";
import Search from "../Components/Shop/Search";
function Shoppage() {
  return (
    <>
      <Shop />
      <Search />
      {/* <Categories /> */}
      <Product />
    </>
  );
}

export default Shoppage;
