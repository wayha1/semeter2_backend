import React from "react";

const ProductCard = ({ product }) => {
  // const { image, name, title, price, oldPrice } = product;
  const products = [
    {
      id: 1,
      image: "https:cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 2,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 3,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 4,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 5,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619073505/MMS01SN66eI66as7JWk66mU7J20.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 6,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619075555/thumb-7Ja07ISx7LSI7Yuw7Yq466as7IS4658_500x500.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 7,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619075555/thumb-7Ja07ISx7LSI7Yuw7Yq466as7IS4658_500x500.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 8,
      image:
        "https://d3i908zd4kzakt.cloudfront.net/data/item/1619075555/thumb-7Ja07ISx7LSI7Yuw7Yq466as7IS4658_500x500.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 9,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 10,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 11,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
    {
      id: 12,
      image: "https://cdn.imweb.me/thumbnail/20230926/62af2b3f4b4bc.jpg",
      brand: "Mary&May",
      name: "Houttuynia Cordata +Tea Tree Serum 30ml",
      title: "Product Title 1",
      price: 30,
      oldPrice: 45,
    },
  ];

  return (
    <>
      <div className="bg-white pb-10">
        <div className="text-center ">
          <h1 className="font-bold text-4xl mb-4 py-10">Best Selling Products</h1>
        </div>
        {/* Product Card */}
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-y-20 gap-x-14 pt-10 pb-5 text-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-72  duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={product.image}
                  alt="Product"
                  className="h-80 w-72 object-cover "
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {product.brand}
                  </span>
                  <p className="text-lg font-bold text-black text-center">
                    {product.name}
                  </p>
                  <div className="flex justify-center items-center">
                    <p className="text-lg text-center font-semibold text-black cursor-auto my-3">
                      ${product.price}
                    </p>
                    {product.oldPrice && (
                      <del>
                        <p className="text-sm text-center text-gray-600 cursor-auto ml-2">
                          ${product.oldPrice}
                        </p>
                      </del>
                    )}
                  </div>
                  {/* rating */}
                  <div class="flex gap-0.5 justify-center">
                    <svg
                      class="h-5 w-5 shrink-0 fill-amber-400"
                      viewBox="0 0 256 256"
                    >
                      <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                    </svg>
                    <svg
                      class="h-5 w-5 shrink-0 fill-amber-400"
                      viewBox="0 0 256 256"
                    >
                      <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                    </svg>
                    <svg
                      class="h-5 w-5 shrink-0 fill-amber-400"
                      viewBox="0 0 256 256"
                    >
                      <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                    </svg>
                    <svg
                      class="h-5 w-5 shrink-0 fill-gray-300"
                      viewBox="0 0 256 256"
                    >
                      <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                    </svg>
                    <svg
                      class="h-5 w-5 shrink-0 fill-gray-300"
                      viewBox="0 0 256 256"
                    >
                      <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
                    </svg>
                  </div>
                  {/* <div className="ml-auto">
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
                    </div> */}
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
