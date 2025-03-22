import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsappButton";
import CardsProducts from "../components/CardsProducts";

const Home = () => {
  
  const productsData = [
    {
      id: 1,
      name: "Huiles Naturelles",
      stars: 3,
      image:
        "../../public/oils.jpg",
      description:
        "Des huiles 100% naturelles pour nourrir et hydrater votre peau.",
      link: "./",
    },
    {
      id: 2,
      name: "Savons Artisanaux",
      stars: 4,
      image:
        "./savon.jpg",
      description:
        "Savons faits à la main, doux et parfumés pour une peau éclatante.",
      link: "./",
    },
    {
      id: 3,
      name: "Gels Douche",
      stars: 5,
      image:
        "./gels.jpg",
      description:
        "Offrez-vous un moment de fraîcheur et de détente sous la douche.",
      link: "./",
    },
    {
      id: 4,
      name: "Mèches de Qualité",
      stars: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/19/22/hair-1281059_1280.jpg",
      description: "Sublimez votre coiffure avec nos mèches de haute qualité.",
      link: "./",
    },
    {
      id: 5,
      name: "Pommades Capillaires",
      stars: 3,
      image:
        "./pommades.jpg",
      description:
        "Pommades nourrissantes pour des cheveux forts et brillants.",
      link: "./",
    },
    {
      id: 6,
      name: "Lotions Hydratantes",
      stars: 5,
      image:
        "lotions.jpg",
      description: "Lotions hydratantes pour une peau douce et éclatante.",
      link: "./",
    },
    {
      id: 7,
      name: "Crèmes de Soin",
      stars: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/12/53/cream-1840438_1280.jpg",
      description:
        "Des crèmes riches en vitamines pour une peau protégée et éclatante.",
      link: "./",
    },
    {
      id: 8,
      name: "deodorents",
      stars: 4,
      image:
        "./deodorents.jpg",
      description:
        "Des crèmes riches en vitamines pour une peau protégée et éclatante.",
      link: "./",
    },
    {
      id: 9,
      name: "Parfums",
      stars: 4,
      image:
        "./parfums.jpg",
      description:
        "Des crèmes riches en vitamines pour une peau protégée et éclatante.",
      link: "./",
    },
    {
      id: 10,
      name: "deodorents",
      stars: 4,
      image:
        "./deodorents.jpg",
      description:
        "Des crèmes riches en vitamines pour une peau protégée et éclatante.",
      link: "./",
    },
  ];
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

       
        <CardsProducts products={productsData}/>

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

export default Home