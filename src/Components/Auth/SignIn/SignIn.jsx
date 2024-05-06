import React, { useState } from "react";
import { CgPhone } from "react-icons/cg";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading"; // Import the Loading component
import useAuthContext from "../../context/AuthContext";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, error } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state to true
    await signin({ email, password });
    setIsLoading(false); // Set loading state to false after signin operation
  };

  return (
    <section>
      <div className="min-h-screen bg-pink-100 w-full">
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <p className="text-7xl text-blue-800 font-bold font-abc">skin.me</p>
          <p className="text-blue-500 font-abc text-sm">
            Love Your Skin, Love Yourself
          </p>

          <div className="flex mt-10 flex-col items-center relative">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
              <p className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign In to your Account
              </p>
              <p className="mt-2 flex justify-center">
                Or{" "}
                <button className="ml-2 text-pink-400 cursor-pointer hover:underline">
                  <Link to="/signup">
                    <p>Create an account</p>
                  </Link>
                </button>
              </p>
            </div>
            <div className="mt-10 flex flex-col items-center">
              <form onSubmit={handleSubmit}>
                <label
                  for="email address"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
                />
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
                />
                {error && <p className="text-red-500">{error}</p>}

                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-2 mb-4 bg-pink-400 text-white rounded-lg focus:outline-none focus:border-pink-400"
                >
                  Sign In
                </button>
              </form>
              {isLoading && <Loading />}{" "}
              {/* Render Loading component when isLoading is true */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className=" text-gray-500 px-24">
                    <span className="relative bg-pink-100">
                      Or continue with
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:text-pink-400 hover:bg-gray-100"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:text-pink-400 hover:bg-gray-50"
                  >
                    <CgPhone size={24} />
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:text-pink-400 hover:bg-gray-50"
                  >
                    <FaGoogle size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
