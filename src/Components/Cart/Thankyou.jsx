import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 px-10 py-10">
      <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-3xl font-bold text-pink-400 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">Your order has been placed successfully.</p>
        <Link to="/shop">
          <button className="bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Return to Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
