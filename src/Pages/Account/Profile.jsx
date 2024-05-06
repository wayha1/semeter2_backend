import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "../../Components/api/axios";
import useAuthContext from "../../Components/context/AuthContext";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/category", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setUserData({ ...user, ...response.data }); // Include user data along with fetched user data
        console.log(userData);
      } catch (error) {
        setError("Error fetching user data");
        console.error("Fetch User Data Error:", error);
      }
    };

    fetchUserData();
  }, [user]); // Include user as a dependency


  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div className="bg-[#F7EFF2] h-screen w-full">
        <div className="px-15 py-8 flex justify-center">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 bg-white shadow-lg rounded-xl ">
            <div className="col-span-4 sm:col-span-3">
              <div className=" p-6">
                <div className="flex flex-col items-center pt-10">
                  <img
                    src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                    alt="profile"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">Mateo</h1>
                  <p className="text-gray-700">General User</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white
                      active:bg-gray-200 py-2 px-4 rounded"
                    >
                      Sign Out
                    </button>
                    <a
                      href="/"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
                {error && <p>Error: {error}</p>}
                {userData && (
                  <div className="bg-[/F7EFF2] h-auto w-full">
                    {/* Your existing JSX code here */}
                    {/* You can use `userData` to render user information */}
                  </div>
                )}
                <hr className="my-6" />
                <div className="flex flex-col">
                  <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                    <a href="/profile">General Profile</a>
                  </span>
                  <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                    <a href="/billing">Billing & Payment</a>
                  </span>
                  <span className="text-gray-800 uppercase font-bold tracking-wider mb-2 text-center hover:text-pink-400">
                    <a href="/order">Order History</a>
                  </span>
                </div>
                <vt className="my-6" />
              </div>
            </div>
            <div className="pl-10 col-span-4 sm:col-span-9">
              <div className="px-4 py-10 sm:px-6"></div>
              <div className="pb-5">
                {/* Column Box */}
                <h1 className=" pt-5 text-4xl font-bold text-gray-900">
                  Profile Information
                </h1>
                <p className="pt-5 text-md text-gray-500">
                  Manage Your personal information, including phone numbers and
                  email address where you can be contacted
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:gap-6 pt-10 ">
                  <a
                    href="/"
                    className="flex flex-col justify-between bg-white border border-indigo-100 rounded-xl shadow hover:shadow-xl p-5"
                  >
                    <div>
                      <div className="flex justify-between items-center   ">
                        <div className="pb-5 text-xl font-bold lg:text-2xl">
                          Name
                        </div>
                        <div className="px-15">
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-pink-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {user && <p className="mb-6 text-lg text-gray-600">{user.name}</p>}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex flex-col justify-between bg-white border border-indigo-100 rounded-xl shadow hover:shadow-xl p-5"
                  >
                    <div>
                      <div className="flex justify-between items-center   ">
                        <div className="pb-5 text-xl font-bold lg:text-2xl">
                          Gender
                        </div>
                        <div className="px-15">
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-pink-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {user && <p className="mb-6 text-lg text-gray-600">{user.gender}</p>}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex flex-col justify-between bg-white border border-indigo-100 rounded-xl shadow hover:shadow-xl p-5"
                  >
                    <div>
                      <div className="flex justify-between items-center   ">
                        <div className="pb-5 text-xl font-bold lg:text-2xl">
                          Role
                        </div>
                        <div className="px-15">
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-pink-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {user && <p className="mb-6 text-lg text-gray-600">{user.role}</p>}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex flex-col justify-between bg-white border border-indigo-100 rounded-xl shadow hover:shadow-xl p-5"
                  >
                    <div>
                      <div className="flex justify-between items-center   ">
                        <div className="pb-5 text-xl font-bold lg:text-2xl">
                          Email
                        </div>
                        <div className="px-15">
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-pink-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {user && <p className="mb-6 text-lg text-gray-600">{user.email}</p>}
                    </div>
                  </a>
                  <a
                    href="/"
                    className="flex flex-col justify-between bg-white border border-indigo-100 rounded-xl shadow hover:shadow-xl p-5"
                  >
                    <div>
                      <div className="flex justify-between items-center   ">
                        <div className="pb-5 text-xl font-bold lg:text-2xl">
                          Contact Number
                        </div>
                        <div className="px-15">
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 text-pink-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="mb-6 text-lg text-gray-600">012 345 678</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
