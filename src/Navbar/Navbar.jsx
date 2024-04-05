import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../asset/img.png";

const Navigation = [
  { name: "Home", path: "/", current: true },
  { name: "Shop", path: "/shop", current: false },
  { name: "About", path: "/about", current: false },
  { name: "Contact", path: "/contact", current: false },
  { name: "Dashboard", path: "/dashboard", current: false },
];

const UserNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "#" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 p-4 flex items-center justify-between z-50">
      <div className="flex items-center space-x-4">
        <NavLink to="/">
          <img
            className="w-[120px] h-[40px] mt-2 mr-8"
            src={Logo}
            alt="Skin.me"
          />
        </NavLink>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {/* SVG path for menu icon */}
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:block space-x-8`}>
        {Navigation.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="px-3 py-2 text-lg font-medium hover:text-pink-500"
            activeClassName="text-pink-400"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="md:block">
        {!localStorage.getItem("token") ? (
          <NavLink
            to="/login"
            className="text-lg font-medium hover:text-pink-500"
          >
            Sign In / Up
          </NavLink>
        ) : (
          <div className="flex items-center">
            <NavLink to="/cart" className="mr-4">
              <span className="absolute -inset-1.5" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </NavLink>
            <NavLink to="/favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </NavLink>
            <div className="ml-4 relative">
              <button
                onClick={toggleMenu}
                className="flex items-center max-w-xs rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                  alt="UserProfile"
                />
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {UserNavigation.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
