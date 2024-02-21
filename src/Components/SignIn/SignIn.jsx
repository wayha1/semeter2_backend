import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#F7EFF2] w-full">
      <div
        className="flex flex-col w-full h-screen  items-center 
      justify-center"
      >
        <p className="text-7xl text-blue-800 font-bold font-abc">skin.me</p>
        <p className="text-blue-500 font-abc text-sm">Love Your Skin, Love Yourself</p>

        <div class="flex w-[350px] mt-10 flex-col items-center relative">
          <p
            class="absolute top-0 left-0 text-2xl font-medium
            font-dbc text-gray-700"
          >
            Sign In to your Account
          </p>
          <div class="mt-14 flex flex-col items-center w-[350px]">
            <input
              type="text"
              placeholder="Username"
              class="w-full px-4 py-2 mb-4 border-2 border-gray-300 
                    rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              class="w-full px-4 py-2 m-2 mb-4 border-2 border-gray-300 
                    rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              className="w-full px-4 py-2 m-2 mb-4 bg-[#F47099] text-white
                rounded-lg focus:outline-none focus:border-blue-500"
            >
              Sign In
            </button>

            <p className="mt-10">
              Don't have an account?
              <button className="ml-2 text-[#F47099] cursor-pointer hover:underline">
                <Link to="/signup">
                  <p>Sign Up</p>
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
