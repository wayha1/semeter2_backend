import React, { useState } from "react";
import { CgHeart } from "react-icons/cg";
import { GrShop } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import useAuthContext from "../Components/context/AuthContext";
import Logo from "../asset/img.png";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Home", path: "/", current: true },
  { name: "Shop", path: "/shop", current: false },
  { name: "About", path: "/about", current: false },
  { name: "Contact", path: "/contact", current: false },
  { name: "Dashboard", path: "/dashboard", current: false },
];

// const userNavigation = [
//   { name: "Your Profile", href: "/setting" },
//   { name: "Settings", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthContext();
  const [error, setError] = useState("");
  const [cartColor, setCartColor] = useState("black");
  const [heartColor, setHeartColor] = useState("black");

  const handleClick = (index) => {
    setActiveItem(index);
  };
  console.log(user);

  const handleCartClick = () => {
    setCartColor("text-pink-500");
    setHeartColor("black");
  };

  const handleHeartClick = () => {
    setHeartColor("text-pink-500");
    setCartColor("black");
  };
  const handleNavbarClick = () => {
    setHeartColor("black");
    setCartColor("black");
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <nav className="bg-white sticky top-0 p-4 flex items-center justify-between z-50">
        {/* Regular Desktop Menu */}
        <div className=" items-center space-x-4 mr-6">
          <NavLink to="/">
            <div className="flex ">
              <img
                className="w-[120px] h-[40px] mt-2 mr-8"
                src={Logo}
                alt="Skin.me"
              />
              <MobileMenu navigation={navigation} />
            </div>
          </NavLink>
        </div>
        <div className="md:block space-x-8">
          <div
            className={`${open ? "block" : "hidden"} flex md:block space-x-8`}
          >
            {/* Mapping over menuItems array to display each item */}
            {navigation.map((item, index) => (
              <button onClick={handleNavbarClick}>
                <NavLink
                  key={index}
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
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          {/* cart and favorite */}
          <div className="ml-4 flex items-center md:ml-6">
            <button
              className={`relative mr-2 ${cartColor}`}
              onClick={handleCartClick}
            >
              <NavLink to="/cart">
                <GrShop size={25} />
              </NavLink>
            </button>
            <button
              className={`relative mr-2 ${heartColor}`}
              onClick={handleHeartClick}
            >
              <NavLink to="/favorite">
                <CgHeart size={28} />
              </NavLink>
            </button>

            {/* Conditional Rendering based on user login status */}
            {user ? (
              <div className="hidden md:block">
                <button onClick={handleNavbarClick} className="relative flex max-w-xs items-center rounded-full bg-pink-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800">
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
                {/* <div className="ml-4 flex items-center md:ml-6"> */}
                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-pink-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800">
                    <NavLink to="/setting"></NavLink>
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                      alt="UserProfile"
                    />
                  </Menu.Button>
                </div> */}
                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> */}

                {/* {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) =>
                          item.name === "Sign out" ? (
                            <button
                              onClick={handleLogout}
                              className={classNames(
                                active ? "bg-pink-100" : "",
                                "block px-4 py-2 text-sm text-pink-700"
                              )}
                            >
                              {item.name}
                            </button>
                          ) : (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-pink-100" : "",
                                "block px-4 py-2 text-sm text-pink-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )
                        } */}
                {/* </Menu.Item>
                    ))} */}
                {/* </Menu.Items>
                </Transition> */}
                {/* </Menu> */}
              </div>
            ) : (
              // </div>
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
        {/* )} */}

        {/* </div> */}

        {/* <div className="lg:hidden">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <Fragment>
             
              <Menu as="div" className="relative ml-3">
                <div>
                  
                  <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-grey-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-pink-500 p-2 text-pink-400 hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="false"
                        />
                      )}
                    </Disclosure.Button>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {navigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-pink-100" : "",
                              "block px-4 py-2 text-sm text-pink-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </Fragment>
          )}
        </Disclosure>
      </div> */}
      </nav>
    </>
  );
}

export default Navbar;
