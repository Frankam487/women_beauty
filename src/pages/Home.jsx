
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsappButton";
import CardsProducts from "../components/CardsProducts";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="home">
      <Header />
      <div className="bg-slate-100 home-content">
        <motion.h1
          className="text-center text-4xl font-bold mt-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Découvrez nos Produits de Beauté
        </motion.h1>

        <p className="text-center text-lg mt-4 px-6">
          Retrouvez nos huiles naturelles, parfums exquis et gels douche
          rafraîchissants pour une routine beauté parfaite.
        </p>

        {/* Section des Produits */}
        <CardsProducts/>

        <div className="text-center my-12">
          <button className="bg-gray-900   text-white px-6 py-3 no-underline shadow-md hover:bg-gray-700 transition">
            <NavLink to="/services" className="no-underline text-white font-bold font-serif">Accéder à la Boutique</NavLink>
          </button>
        </div>

        <WhatsAppButton />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
