import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deliphoto1 from "../../asset/J&T.jpg";
import deliphoto2 from "../../asset/VET.jpg";
import deliphoto3 from "../../asset/kerry.jpg";
import axios from "../api/axios";

export const Cart = () => {
  const [getProduct, setGetProduct] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const deliveryOptions = [
    { id: 1, name: "J&T Express", duration: "1 - 2 days", cost: 2.0 },
    {
      id: 2,
      name: "Virakbuntham Express Transport",
      duration: "2 - 3 days",
      cost: 3.0,
    },
    { id: 3, name: "Kerry Express", duration: "1 - 2 days", cost: 5.0 },
  ];

  const handleDeliveryOptionChange = (deliveryId) => {
    const selectedOption = deliveryOptions.find(
      (option) => option.id === deliveryId
    );
    setSelectedDelivery(selectedOption);
  };

  const calculateShippingCost = () => {
    if (selectedDelivery) {
      return selectedDelivery.cost;
    }
    return 0;
  };

  const fetchCartData = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.request({
        url: "/cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGetProduct(response.data.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setGetProduct([]);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(getProduct));
  }, [getProduct]);

  const handleAddToCart = (index, quantity) => {
    const updatedProducts = [...getProduct];
    updatedProducts[index].quantity = quantity;
    setGetProduct(updatedProducts);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = getProduct.filter(
      (item) => item.product_id !== productId
    );
    setGetProduct(updatedProducts);
  };

  const calculateSubtotal = () => {
    return getProduct.reduce(
      (total, item) => total + item.product_id.product_price * item.quantity,
      0
    );
  };

  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Your Shopping Bag
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-pink-100 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>
              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                {getProduct.map((item, index) => (
                  <div
                    key={index}
                    className="w-64 bg-white shadow-lg p-4 m-4 rounded-lg"
                  >
                    <img
                      src={item.product_id.product_image}
                      alt={item.product_id.product_name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <div className="mt-4">
                      <h2 className="text-xl font-semibold">
                        {item.product_id.product_name}
                      </h2>
                      <p className="text-gray-600">
                        ${item.product_id.product_price}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleAddToCart(index, parseInt(e.target.value))
                          }
                          className="w-16 border rounded p-1"
                        />
                        <button
                          onClick={() => handleDeleteProduct(item.product_id)}
                          className="rounded-lg bg-red-500 text-white p-2 hover:bg-white hover:text-red-500"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-pink-100 space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      ${calculateSubtotal().toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      ${calculateShippingCost().toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    $
                    {(calculateSubtotal() + calculateShippingCost()).toFixed(2)}
                  </p>
                </div>
                <div>
                  <Link to="/checkout">
                    <button className=" item-center w-full rounded-lg bg-red-500 text-white p-2">
                      CheckOut
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-pink-100 space-y-6">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  {deliveryOptions.map((option) => (
                    <div
                      key={option.id}
                      className="flex justify-start items-start w-full cursor-pointer"
                      onClick={() => handleDeliveryOptionChange(option.id)}
                    >
                      <div
                        className={`flex justify-center items-center space-x-4 ${
                          selectedDelivery && selectedDelivery.id === option.id
                            ? "bg-red-300 rounded-lg p-2 "
                            : ""
                        }`}
                      >
                        <img
                          src={
                            option.id === 1
                              ? deliphoto1
                              : option.id === 2
                              ? deliphoto2
                              : deliphoto3
                          }
                          alt={option.name}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                        <div className="flex flex-col justify-center items-start">
                          <p className="text-lg font-semibold leading-6 text-gray-800">
                            {option.name}
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            {option.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
