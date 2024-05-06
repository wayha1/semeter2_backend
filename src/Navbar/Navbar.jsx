import React, { useState } from "react";
import { CgHeart } from "react-icons/cg";
import { GrShop } from "react-icons/gr";
import { NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../Components/context/AuthContext";
import Logo from "../asset/img.png";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Home", path: "/", current: true },
  { name: "Shop", path: "/shop", current: false },
  { name: "About", path: "/about", current: false },
  { name: "Contact", path: "/contact", current: false },
  { name: "Dashboard", path: "/dashboard", current: false, adminOnly: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const [cartColor, setCartColor] = useState("black");
  const [heartColor, setHeartColor] = useState("black");

  const handleClick = (index) => {
    setActiveItem(index);
    setCartColor("black");
    setHeartColor("black");
  };

  const handleCartClick = () => {
    setCartColor("text-pink-500");
    setHeartColor("black");
  };

  const handleHeartClick = () => {
    setHeartColor("text-pink-500");
    setCartColor("black");
  };

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
      <nav className="bg-white sticky lg:flex lg:justify-between lg:items-center">
        {/* Regular Desktop Menu */}
        <div className="items-center space-x-4 p-5">
          <NavLink to="/">
            <div className="max-sm:flex max-sm:items-center max-sm:justify-between ">
              <img
                className="w-[120px] h-[40px] mt-2 mr-8"
                src={Logo}
                alt="Skinme"
              />
              <MobileMenu navigation={navigation} />
            </div>
          </NavLink>
        </div>
        <div className=" max-sm:hidden md:block space-x-8">
          <div className="flex md:block space-x-8">
            {/* Mapping over menuItems array to display each item */}
            {navigation.map((item, index) =>
              // Check if the item should be displayed based on user role
              (item.adminOnly && user && user.role === "admin") ||
              !item.adminOnly ? (
                <button key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => handleClick(index)}
                    className={classNames(
                      activeItem === index
                        ? "w-[90px] text-center text-pink-400"
                        : "",
                      "px-3 py-2 text-lg font-medium hover:text-pink-500"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                </button>
              ) : null
            )}
          </div>
        </div>
        <div className="hidden lg:block pr-6">
          {/* cart and favorite */}
          <div className="flex items-center justify-center md:ml-6">
            <button
              className={`relative mr-2 ${cartColor}`}
              onClick={handleCartClick}
            >
              <NavLink to="/cart">
                <GrShop size={25} />
              </NavLink>
            </button>
            <button
              className={`relative mr-4 ${heartColor}`}
              onClick={handleHeartClick}
            >
              <NavLink to="/favorite">
                <CgHeart size={28} />
              </NavLink>
            </button>

            {/* Conditional Rendering based on user login status */}
            {user ? (
              <div className="hidden md:block">
                <div className="flex space-x-5">
                  <button
                    onClick={handleClick}
                    className="relative flex max-w-xs items-center rounded-full bg-pink-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800"
                  >
                    <NavLink to="/profile">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                        alt="UserProfile"
                      />
                    </NavLink>
                  </button>
                  {/* <button
                    onClick={handleLogout}
                    className="relative bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 "
                  >
                    Sign Out
                  </button> */}
                </div>
              </div>
            ) : (
              <div className="sign_in_up">
                <NavLink
                  to="/login"
                  className="ml-2 text-center text-lg rounded-lg p-2 font-medium bg-pink-400 text-white hover:bg-pink-500"
                >
                  Log In
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
