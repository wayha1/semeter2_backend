import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      const { data } = response;
      // Set cookie with the access token
      Cookies.set("accessToken", data.token, { expires: 7 }); // Expires in 7 days
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="min-h-screen bg-[#F7EFF2] w-full">
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <p className="text-7xl text-blue-800 font-bold font-abc">skin.me</p>
          <p className="text-blue-500 font-abc text-sm">Love Your Skin, Love Yourself</p>

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
                <button
                  type="submit"
                  className="w-full px-4 py-2 m-2 mb-4 bg-[#F47099] text-white rounded-lg focus:outline-none focus:border-blue-500"
                >
                  Sign In
                </button>
              </form>

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
    </section>
  );
};
