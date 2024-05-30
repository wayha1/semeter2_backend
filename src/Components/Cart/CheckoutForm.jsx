import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { CgArrowLeftO } from "react-icons/cg";
import { Link } from "react-router-dom";

const CheckoutForm = ({ totalPayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [orderSummary, setOrderSummary] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw new Error(error.message);
      }

      setSucceeded(true);
      window.location.href = "/thank"; // Redirect to Thank You page on successful payment
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateTotalAmount = () => {
    const totalAmount = 100; // Placeholder value, replace with your logic
    return totalAmount;
  };

  const generateOrderSummary = () => {
    const totalAmount = calculateTotalAmount();
    const { name, phone, address } = formData;
    const date = new Date().toLocaleDateString();

    const summary = `
      Order Summary
      -----------------------------
      Name: ${name}
      Phone Number: ${phone}
      Delivery Address: ${address}
      Date: ${date}
      -----------------------------
    `;
    setOrderSummary(summary);
  };

  useEffect(() => {
    generateOrderSummary();
  }, [formData]);

  return (
    <div className="min-h-screen bg-pink-100 px-10 py-10">
      <Link to="/cart" className="text-gray-600 hover:text-gray-900">
        <CgArrowLeftO size={45} />
      </Link>
      <div className="flex items-center justify-between px-40">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                Delivery Address
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your delivery address"
                required
                value={formData.address}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Card Details
              </label>
              <div className="border border-gray-300 rounded p-3">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading || succeeded}
            >
              {loading ? "Processing..." : "Confirm Order"}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            {succeeded && (
              <div className="text-green-500 mt-2">Payment Succeeded!</div>
            )}
          </form>
        </div>

        {orderSummary && (
          <div className="w-full max-w-lg mt-8 p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-xl text-pink-400 font-bold mb-4">
              Order Summary
            </h2>
            <div className="text-left whitespace-pre-wrap">
              {orderSummary.split("\n").map((line, index) => (
                <p key={index} className="font-mono">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
