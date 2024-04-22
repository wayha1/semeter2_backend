import React, { useState } from 'react';
import classNames from 'classnames';

const MobileMenu = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden flex z-50">
      <button
        onClick={toggleMenu}
        className="menu-toggle flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 text-white focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="menu"
      >
        <span className="sr-only">Toggle Menu</span>
        <span className="menu-icon ">&#9776;</span> {/* ☰ */}
        {/* <span className="close-icon">&times;</span> ✕ */}
      </button>
      <nav
        id="menu"
        className={classNames(
          'menu',
          'absolute top-full left-0 z-20 bg-white w-full shadow-lg',
          {
            'hidden': !isOpen,
          }
        )}
      >
        <ul>
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex justify-center py-2 px-4 text-black hover:text-white hover:bg-pink-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
