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
  const [is_active, setIsActive] = useState(0);
  const [role, setRole] = useState("");
  const { signup, loading, error: authError } = useAuthContext(); // Get loading state and error message from useAuthContext


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call signup function with form data
      await signup({ name, email, password, password_confirmation, gender,is_active,role });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="min-h-screen bg-pink-100 w-full">
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <p className="text-7xl text-blue-800 font-bold font-abc">skin.me</p>
        <p className="text-blue-500 font-abc text-sm">
          Love Your Skin, Love Yourself
        </p>

        <div className="flex w-[350px] mt-10 flex-col items-center relative">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <p className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create a new account
            </p>
            <p className="mt-2 flex justify-center">
              Or{" "}
              <button className="ml-2 text-pink-400 cursor-pointer hover:underline">
                <Link to="/login">
                  <p>Login to your account</p>
                </Link>
              </button>
            </p>
          </div>
          <div className="mt-10 flex flex-col justify-center w-[350px]">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mb-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
            />
            {/* Gender Select */}
            <div className="w-full items-center space-x-5 flex py-2 pb-4">
              <p className="block text-lg font-medium text-gray-700">Gender:</p>
              <label className=" mt-1">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                  className=""
                />{" "}
                Male
              </label>
              <label className="mt-1">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                  className=""
                />{" "}
                Female
              </label>
            </div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
            />
            <label
              htmlFor="password"
              className="flex text-sm font-medium text-gray-700"
            >
              Password
              <p className="text-sm text-gray-500"> (At least 8 characters)</p>
            </label>
            <input
              type="password"
              placeholder="Enter a new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
            />
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm_Password
            </label>
            <input
              type="password"
              placeholder="Confirm your new password "
              value={password_confirmation}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-400"
            />
            <button
              onClick={handleSubmit} // Call handleSubmit when the button is clicked
              className="w-full text-xl px-4 py-2 mt-2
                     mb-4 bg-pink-400 text-white active:bg-slate-500
                    rounded-xl focus:outline-none focus:border-pink-400"
              disabled={loading} // Disable the button when loading is true
            >
              {loading ? <Loading /> : "Sign Up"}{" "}
              {/* Show Loading component when loading is true */}
            </button>

            {authError && <p className="text-red-500">{authError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
