import classNames from "classnames";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden z-50 ">
      <button
        onClick={toggleMenu}
        className="menu-toggle flex items-center justify-center w-10 h-10 rounded-full bg-pink-400 text-white focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="menu"
      >
        <span className="sr-only">Toggle Menu</span>
        {/* Conditional rendering for menu icon */}
        {isOpen ? (
          <span className="menu-icon">&#10005;</span>
        ) : (
          <span className="menu-icon">&#9776;</span>
        )}
      </button>
      <nav
        id="menu"
        className={classNames(
          "menu",
          "absolute top-full left-0 bg-white   w-full shadow-lg",
          {
            hidden: !isOpen,
          }
        )}
      >
        <ul>
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className="flex justify-center font-semibold py-2 px-4 text-pink-400 hover:text-white hover:bg-pink-400"
                onClick={toggleMenu} // Close the menu when a link is clicked
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <div className="px-5 pb-5">
            <NavLink
              className="flex justify-center py-2 px-4 font-semibold text-white rounded-lg  bg-pink-400 hover:text-white hover:bg-pink-400"
              to="/login"
            >
              Log In
            </NavLink>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
