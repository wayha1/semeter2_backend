import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading"; // Import the Loading component
import useAuthContext from "../../context/AuthContext";

export default function SignUp() {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const { signup, loading, error: authError } = useAuthContext(); // Get loading state and error message from useAuthContext

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call signup function with form data
      await signup({ name, email, password, password_confirmation, gender});
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#F7EFF2] w-full">
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <p className="text-7xl text-blue-800 font-bold font-abc">skin.me</p>
        <p className="text-blue-500 font-abc text-sm">
          Love Your Skin, Love Yourself
        </p>

        <div className="flex w-[350px] mt-10 flex-col items-center relative">
          <p className="absolute top-0 left-0 text-2xl font-medium font-dbc text-gray-700">
            Create your Account
          </p>
          <div className="mt-14 flex flex-col items-center w-[350px]">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 m-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm-Password"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full px-4 py-2 m-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {/* Gender Select */}
            <div className="w-full items-center space-x-5 flex">
              <p className="text-lg ">Gender:</p>
              <label className=" mt-1">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                  className=""
                />
                Male
              </label>
              <label className="mt-1">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                  className=""
                />
                Female
              </label>
            </div>

            <button
              onClick={handleSubmit} // Call handleSubmit when the button is clicked
              className="w-full text-xl px-4 py-2
                    m-2 mb-4 bg-pink-400 text-white active:bg-slate-500
                    rounded-xl focus:outline-none focus:border-blue-500"
            >
              {loading ? <Loading /> : "Sign Up"}{" "}
              {/* Show Loading component when loading is true */}
            </button>

            {authError && (
              <p className="text-red-500">{authError}</p>
            )}

            <p className="mt-10">
              You already have an account!
              <button className="ml-2 text-pink-400 cursor-pointer hover:underline">
                <Link to="/login">
                  <p>Sign In</p>
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
