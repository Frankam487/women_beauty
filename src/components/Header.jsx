import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent text-white shadow-lg fixed top-0 left-0 w-full z-50 backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div translate="no" className="text-4xl font-bold tracking-wide">
          <NavLink
            to="/"
            className="no-underline text-gray-700 font-bold tracking-wide"
          >
            <span className="text-2xl font-bold" translate="no">House</span>Beauty
          </NavLink>
        </div>

        <button
          className="lg:hidden p-2 text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 transition-all duration-300 ease-in-out transform hover:scale-125"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden lg:flex space-x-8">
          <NavLink
            to="/"
            className="text-gray-900 no-underline font-bold transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-105 hover:underline decoration-2 px-4 py-2"
          >
            Accueil
          </NavLink>

          <NavLink
            to="/services"
            className="text-gray-900 no-underline font-bold transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-105 hover:underline decoration-2 px-4 py-2"
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className="text-gray-900 no-underline font-bold transition duration-300 ease-in-out hover:text-yellow-500 hover:scale-105 hover:underline decoration-2 px-4 py-2"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden bg-black bg-opacity-80 fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col items-center bg-gradient-to-t from-gray-900 to-black py-24 justify-center space-y-6">
          <NavLink
            to="/"
            className="text-white text-lg transform transition duration-300 ease-in-out hover:scale-110 hover:underline px-6 py-2 no-underline"
          >
            Acceuil
          </NavLink>

          <NavLink
            to="/services"
            className="text-white text-lg transform transition duration-300 ease-in-out hover:scale-110 hover:text-yellow-500 hover:underline px-6 py-2 no-underline"
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className="text-white text-lg transform transition duration-300 ease-in-out hover:scale-110 hover:text-yellow-500 hover:underline px-6 py-2 no-underline"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
