import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../asset/img.jpg";

const navigation = [
  { name: "Home", path: "/", current: true },
  { name: "Shop", path: "/shop", current: false },
  { name: "About", path: "/about", current: false },
  { name: "Contact", path: "/contact", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "/setting" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  return (
    <nav className="bg-white sticky top-0 p-4 flex items-center justify-between z-50">
      {/* Regular Desktop Menu */}
      <div className=" items-center space-x-4 mr-6">
        <NavLink to="/">
          <img className="w-[120px] h-[40px] mt-2 mr-8" src={Logo} alt="Skin.me" />
        </NavLink>
      </div>
      <div className="hidden md:block">
        <div className="flex space-x-8">
          {/* Mapping over menuItems array to display each item */}
          {navigation.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => handleClick(index)}
              className={classNames(
                activeItem === index ? "w-[90px] text-center text-pink-400" : "",
                "px-3 py-2 text-lg font-medium hover:text-pink-500"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="relative rounded-full bg-pink-400 p-1 text-white hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800"
          >
            <NavLink to='/cart' >
              <span className="absolute -inset-1.5" />
              {/* <span className="sr-only">View Cart</span> */}
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
          </button>
          <button
            type="button"
            className="relative ml-3 rounded-full bg-pink-400 p-1 text-white hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Favorites</span>
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
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-pink-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
                  alt="UserProfile"
                />
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
                {userNavigation.map((item) => (
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
        </div>
      </div>
      {/* </div> */}

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <Fragment>
              {/* Mobile Menu Content dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  {/* Mobile menu button */}
                  <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-grey-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-pink-500 p-2 text-pink-400 hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="false" />
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
                    {userNavigation.map((item) => (
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
      </div>
    </nav>
  );
}

export default Navbar;
