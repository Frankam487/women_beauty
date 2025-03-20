import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div translate="no" className="text-3xl font-bold tracking-wider">
          <NavLink
            to="/"
            className="no-underline text-rose-700 hover:text-rose-800 transition-colors duration-300"
          >
            NaturaSkin
          </NavLink>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          className="lg:hidden p-2 text-rose-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="h-7 w-7 transition-transform duration-300 hover:scale-110" />
          ) : (
            <FaBars className="h-7 w-7 transition-transform duration-300 hover:scale-110" />
          )}
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `no-underline font-semibold text-rose-600 transition-all duration-300 ease-in-out px-4 py-2 ${
                isActive
                  ? "text-rose-800 underline decoration-rose-400 decoration-2"
                  : "hover:text-rose-800 hover:underline hover:decoration-rose-400 hover:decoration-2"
              }`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/produits"
            className={({ isActive }) =>
              `no-underline font-semibold text-rose-600 transition-all duration-300 ease-in-out px-4 py-2 ${
                isActive
                  ? "text-rose-800 underline decoration-rose-400 decoration-2"
                  : "hover:text-rose-800 hover:underline hover:decoration-rose-400 hover:decoration-2"
              }`
            }
          >
            Produits
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `no-underline font-semibold text-rose-600 transition-all duration-300 ease-in-out px-4 py-2 ${
                isActive
                  ? "text-rose-800 underline decoration-rose-400 decoration-2"
                  : "hover:text-rose-800 hover:underline hover:decoration-rose-400 hover:decoration-2"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Menu Mobile (Drawer) */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Ferme le menu en cliquant à l'extérieur
      >
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic dans le menu
        >
          {/* Bouton de fermeture dans le drawer */}
          <button
            className="absolute top-4 right-4 p-2 text-rose-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes className="h-6 w-6" />
          </button>

          {/* Contenu du menu */}
          <div className="flex flex-col items-start p-6 mt-16 space-y-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-rose-600 text-lg font-semibold no-underline transition-all duration-300 ${
                  isActive
                    ? "text-rose-800 underline decoration-rose-400 decoration-2"
                    : "hover:text-rose-800 hover:underline hover:decoration-rose-400"
                }`
              }
              onClick={toggleMenu}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/produits"
              className={({ isActive }) =>
                `text-rose-600 text-lg font-semibold no-underline transition-all duration-300 ${
                  isActive
                    ? "text-rose-800 underline decoration-rose-400 decoration-2"
                    : "hover:text-rose-800 hover:underline hover:decoration-rose-400"
                }`
              }
              onClick={toggleMenu}
            >
              Produits
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-rose-600 text-lg font-semibold no-underline transition-all duration-300 ${
                  isActive
                    ? "text-rose-800 underline decoration-rose-400 decoration-2"
                    : "hover:text-rose-800 hover:underline hover:decoration-rose-400"
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;