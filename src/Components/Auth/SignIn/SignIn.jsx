import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoGoogle from "../../../asset/google1.png";
import logoPhone from "../../../asset/p1.png";
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
      <div className="min-h-screen bg-[#F7EFF2] w-full">
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <p className="text-7xl text-blue-800 font-bold font-abc">skin.me</p>
          <p className="text-blue-500 font-abc text-sm">
            Love Your Skin, Love Yourself
          </p>

          <div className="flex w-[350px] mt-10 flex-col items-center relative">
            <p className="absolute top-0 left-0 text-2xl font-medium font-dbc text-gray-700">
              Sign In to your Account
            </p>
            <div className="mt-14 flex flex-col items-center w-[350px]">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {error && <p className="text-red-500">{error}</p>}

                <button
                  type="submit"
                  className="w-full px-4 py-2 m-2 mb-4 bg-pink-400 text-white rounded-lg focus:outline-none focus:border-blue-500"
                >
                  Sign In
                </button>
              </form>
              {isLoading && <Loading />}{" "}
              {/* Render Loading component when isLoading is true */}
              <div className="flex items-center justify-center mt-10 rounded-3xl bg-[#82165C]">
                <img
                  className="w-[40px] h-[40px]"
                  src={logoGoogle}
                  alt="Google Logo"
                />
                <a
                  type="button"
                  href="auth/google"
                  className="px-2 py-2 m-1 text-white"
                >
                  Sign In with Google
                </a>
              </div>
              <div className="flex items-center justify-center mt-10 rounded-3xl bg-[#82165C]">
                <img
                  className="w-[40px] h-[40px]"
                  src={logoPhone}
                  alt="Google Logo"
                />
                <a
                  type="button"
                  href="auth/google"
                  className="px-2 py-2 m-1 text-white"
                >
                  Sign In with No.
                </a>
              </div>
              <p className="mt-10">
              You already have an account!
              <button className="ml-2 text-pink-400 cursor-pointer hover:underline">
                <Link to="/signup">
                  <p>Sign Up</p>
                </Link>
              </button>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
