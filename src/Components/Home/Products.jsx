import React from "react";

const ProductCard = ({ product }) => {
  // const { image, brand, title, price, oldPrice } = product;
  const products = [
    {
      id: 1,
      image: "https:cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 2,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 3,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 4,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 5,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 6,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619075555/thumb-7Ja07ISx7LSI7Yuw7Yq466as7IS4658_500x500.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 7,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619075555/thumb-7Ja07ISx7LSI7Yuw7Yq466as7IS4658_500x500.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 8,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619075555/thumb-7Ja07ISx7LSI7Yuw7Yq466as7IS4658_500x500.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 9,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 10,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 11,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 12,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
  ];

  return (
    <>
      <div className="bg-pink-100 pb-10">
        <div className="text-center pt-20 ">
          <h1 className="font-bold text-4xl mb-4">Best Selling Products</h1>
        </div>
        {/* Product Card */}
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={product.image}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.brand}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      ${product.price}
                    </p>
                    {product.oldPrice && (
                      <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                          ${product.oldPrice}
                        </p>
                      </del>
                    )}
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div class="text-center py-10 px-10">
          <h2 class="font-bold text-2xl md:text-4xl mb-4">
            <a href="#" class="underline text-pink-400 hover:text-pink-500">
              View All Products
            </a>
          </h2>
        </div>
      </div>
    </>
  );
};
// const ProductList = () => {
//   return (
//     <div className="product-container">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };
export default ProductCard;
