import axios from "axios";
import React, { useEffect, useState } from "react";

const OrderHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/userhistory"); // Adjust the URL as needed
        setHistory(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#F7EFF2] h-auto w-full">
      <div className="px-15 py-8 flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 bg-white shadow-lg rounded-xl">
          <div className="col-span-4 sm:col-span-3">
            <div className="p-6">
              <div className="flex flex-col items-center pt-10">
                <img
                  src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  alt="profile"
                />
                <h1 className="text-xl font-bold">Mateo</h1>
                <p className="text-gray-700">General User</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href="/login"
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
              <hr className="my-6" />
              <div className="flex flex-col">
                <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                  <a href="/profile">General Profile</a>
                </span>
                <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                  <a href="/order">Order History</a>
                </span>
              </div>
            </div>
          </div>
          <div className="pl-10 col-span-4 sm:col-span-9">
            <div className="px-4 py-10 sm:px-6">
              <div className="pb-5">
                <h1 className="pt-5 text-4xl font-bold text-gray-900">
                  Order history
                </h1>
                <p className="pt-5 text-md text-gray-500">
                  Check the status of recent orders, manage returns, and
                  discover similar products.
                </p>
              </div>
              <div className="bg-[#F7EFF2] h-auto w-full p-8">
                <div className="bg-white shadow-lg rounded-xl p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Order History
                  </h1>
                  {history.length === 0 ? (
                    <p className="text-gray-500">No orders found.</p>
                  ) : (
                    <ul className="space-y-4">
                      {history.map((item) => (
                        <li
                          key={item.id}
                          className="border border-gray-200 p-4 rounded-lg shadow-sm"
                        >
                          <h2 className="text-xl font-bold">
                            Product: {item.product ? item.product.name : 'Unknown Product'}
                          </h2>
                          <p>Total Price: ${item.total_price}</p>
                          <p>Delivery Address: {item.delivery_address}</p>
                          <p>
                            Date Ordered:{" "}
                            {new Date(item.created_at).toLocaleDateString()}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
