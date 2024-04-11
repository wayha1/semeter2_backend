import React from "react";
import Filter from "./FilterSearch";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  // const { image, brand, title, price, oldPrice } = product;
  const products = [
    {
      id: 1,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNl1gBkibx27s26ZEkC8B6hPz8R11zV563Q&usqp=CAU",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SOLD",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 3,
      image:
        "https://sokoskins.shop/cdn/shop/files/thumb-02_405x405_c83d7242-a942-4488-8c8e-fd1560acff91_405x.jpg?v=1682600891",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SOLD",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ149u_PSE1HoSDXR-GV9YDyblzMwfI7_H69w&usqp=CAU",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 5,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 6,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 7,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 8,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 9,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",

      price: 30,
      oldPrice: 45,
    },
    {
      id: 10,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 11,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 12,
      image:
        "https://moonglow.md/wp-content/uploads/2023/05/MaryMay_Vegan-CICA-Tea-Tree-AHA-PHA-Toner-200ml.webp",
      brand: "Mary&May",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duisvitae ante vel eros fermentum faucibus sit amet euismod lorem.",
      title: "Product Title 1",
      status: "SALE",
      price: 30,
      oldPrice: 45,
    },
  ];

  return (
    <>
      {/* <div className="pt-10 bg-pink-100 pb-10"> */}
      <div>
        <h1 className="font-bold text-4xl mb-4 text-center pt-10">
          Best Selling Products
        </h1>
        <p className="text-center pb-10">Find your perfect skincare match by exploring options based on your skin type, preferences, and budget. Research ingredients, read reviews, and trust your instincts to discover the ideal product for your routine. </p>
        <Filter />
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-72 bg-white  rounded-xl duration-500 "
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt="Product"
                  className="h-100 w-80 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  {/* Conditional rendering of status */}
                  {product.status === "SALE" && (
                    <div className="absolute top-0 left-0 bg-green-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                      {product.status}
                    </div>
                  )}
                  {product.status === "SOLD" && (
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                      {product.status}
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.brand}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg"> ${product.price}</span>
                  <Link to={`/details/${product.id}`}>
                  <button className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                    Buy Now
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}

      {/* Pagination */}

      <ul className="flex justify-center text-xs font-medium space-x-1 py-10">
        <li>
          <a
            href="/?page=1"
            className="inline-flex items-center justify-center w-10 h-10 border border-gray-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="/?page=1"
            className="block w-10 h-10 text-center text-lg border border-gray-100 rounded leading-8"
          >
            1
          </a>
        </li>

        <li className="block w-10 h-10 text-center text-lg text-white bg-pink-400 border-pink-600 rounded leading-8">
          2
        </li>

        <li>
          <a
            href="/?page=3"
            className="block w-10 h-10 text-center text-lg border border-gray-100 rounded leading-8"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="/?page=4"
            className="block w-10 h-10 text-center  text-lg border border-gray-100 rounded leading-8"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="/?page=3"
            className="inline-flex items-center text-lg justify-center w-10 h-10 border border-gray-100 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};

export default ProductCard;
