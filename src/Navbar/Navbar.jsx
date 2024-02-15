import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../asset/img.jpg";

function Navbar() {
    const navBarItem = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "Contact Us", path: "/contact" }
    ];

    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (index) => {
        setActiveItem(index);
    };

    return (
        <nav className="bg-white sticky top-0 p-4 flex items-center justify-between z-50 ">
            {/* Regular Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 mr-6">
                <img
                    className="w-[100px] h-[40px] mt-2 mr-8"
                    src={logo}
                    alt="Logo"
                />

                <div className="flex space-x-8">
                    {/* Mapping over menuItems array to display each item */}
                    {navBarItem.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => handleClick(index)}
                            className={
                                activeItem === index ? 'border p-1 w-[100px] text-center bg-pink-400 text-white' : ''
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
