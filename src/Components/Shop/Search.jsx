import React, { useEffect, useState } from "react";
import axios from "./../api/axios";
import Cookies from "js-cookie";

function Search() {
  const [productBrandSearch, setProductBrandSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [fetching, setFetching] = useState(false);

  const fetchData = async (name) => {
    try {
      setFetching(true);
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.request({
        url: `product/${encodeURIComponent(name)}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response data:", response.data);
      const uniqueProducts = removeDuplicates(response.data.data);
      setProductBrandSearch(uniqueProducts);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setProductBrandSearch([]);
    } finally {
      setFetching(false);
    }
  };

  const removeDuplicates = (products) => {
    const seen = new Set();
    return products.filter((product) => {
      const duplicate = seen.has(product.product_name);
      seen.add(product.product_name);
      return !duplicate;
    });
  };

  useEffect(() => {
    if (query) {
      fetchData(query);
    } else {
      setProductBrandSearch([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value || productBrandSearch.length === 0) {
      setProductBrandSearch([]);
    }
  };

  return (
    <div className="w-full max-sm:py-5 max-sm:flex max-sm:justify-center flex justify-end mb-8">
      <div className="max-w-xs lg:max-w-2xl">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative text-gray-400 focus-within:text-gray-500">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            id="search"
            className="w-full flex justify-center rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-md font-bold"
            placeholder="Search"
            type="search"
            name="search"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        {fetching ? (
          <p>Loading...</p>
        ) : (
          productBrandSearch.length > 0 && (
            <ul className="mt-2 bg-white border border-gray-300 rounded-md">
              {productBrandSearch.map((product, index) => (
                <li key={index} className="py-2 px-4 hover:bg-gray-100">
                  {product.product_name}
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
}

export default Search;
