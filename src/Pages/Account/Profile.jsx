import React, { useEffect, useState } from "react";
import { FaTransgender, FaUserCheck } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
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

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
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
                  <h1 className="text-xl font-bold">{user.name}</h1>
                  <p className="text-gray-700">{user.role}</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white
                      active:bg-gray-200 py-2 px-4 rounded"
                    >
                      Sign Out
                    </button>
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
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-400 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <FaCircleUser size={32} />
                          </div>
                        </div>
                      </div>
                      {user && (
                        <p className="mb-6 text-lg text-pink-500">
                          {user.name}
                        </p>
                      )}
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
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-400 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <FaTransgender size={32} />
                          </div>
                        </div>
                      </div>
                      {user && (
                        <p className="mb-6 text-lg text-pink-500">
                          {user.gender}
                        </p>
                      )}
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
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-400 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <FaUserCheck size={32} />
                          </div>
                        </div>
                      </div>
                      {user && (
                        <p className="mb-6 text-lg text-pink-500">
                          {user.role}
                        </p>
                      )}
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
                          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-400 border rounded-full shadow-inner lg:h-16 lg:w-16">
                            <MdEmail size={32} />
                          </div>
                        </div>
                      </div>
                      {user && (
                        <p className="mb-6 text-lg text-pink-500">
                          {user.email}
                        </p>
                      )}
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
