import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = async (product) => {
    try {
      // Fetch the full product data from the API endpoint using the product id
      const token = Cookies.get("token");
      const response = await axios.get(`/api/products/${product.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch product data");
      }
      const productData = response.data;

      // Add the fetched product data to favorites
      setFavorites((prevFavorites) => {
        if (prevFavorites.find((fav) => fav.id === product.id)) {
          return prevFavorites.filter((fav) => fav.id !== product.id);
        } else {
          return [...prevFavorites, productData];
        }
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Mugwort Pore Clarifying Wash Off Pack",
      img: "https://cdn.webshopapp.com/shops/326488/files/428412974/300x300x1/axis-y-mugwort-pore-clarifying-wash-off-pack.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "6 mins ago",
      comments: 39,
    },
    {
      id: 2,
      name: "SKIN1004 Madagascar",
      img: "https://sokoskins.shop/cdn/shop/products/skin1004-ampoule-serum-centella-ampoule-38409088401654_800x_7f6a903b-3bd3-47a4-bc21-22e1ad527668_800x.webp?v=1676268023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "10 days ago",
      comments: 0,
    },
    {
      id: 3,
      name: "SKIN1004 Madagascar",
      img: "https://sokoskins.shop/cdn/shop/products/skin1004-ampoule-serum-centella-ampoule-38409088401654_800x_7f6a903b-3bd3-47a4-bc21-22e1ad527668_800x.webp?v=1676268023",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "16 hours ago",
      comments: 9,
    },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1 className="w-full flex justify-center font-semibold text-4xl pb-10">
          Your Favorite
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative">
                <a href="/">
                  <img className="w-full" src={product.img} alt="pics" />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <button
                  onClick={() => handleFavoriteToggle(product)}
                  className="text-xs absolute top-0 right-0 text-white mt-3 mr-3 transition duration-500 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={
                      favorites.find((fav) => fav.id === product.id)
                        ? "red"
                        : "none"
                    }
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="/"
                  className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  {product.name}
                </a>
                <p className="text-gray-500 text-sm">{product.description}</p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <svg
                    height="13px"
                    width="13px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </svg>
                  <span className="ml-1">{product.time}</span>
                </span>

                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                  <svg
                    className="h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                  <span className="ml-1">{product.comments} Comments</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="w-full flex justify-center font-semibold text-3xl pt-10">
          Favorited Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-5">
          {favorites.length > 0 ? (
            favorites.map((product) => (
              <div
                key={product.id}
                className="rounded overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative">
                  <a href="/">
                    <img className="w-full" src={product.img} alt="pics" />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </a>
                </div>
                <div className="px-6 py-4 mb-auto">
                  <a
                    href="/"
                    className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                  >
                    {product.name}
                  </a>
                  <p className="text-gray-500 text-sm">{product.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No favorite products yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorite;
