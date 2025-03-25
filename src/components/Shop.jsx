import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearch } from "react-icons/fa";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Liste de produits avec images spécifiques (20 pour commencer)
  const product = [
    {
      id: 1,
      name: "Huile de Coco Pure",
      category: "Huiles",
      stars: 4.5,
      price: 15000,
      image: "https://images.unsplash.com/photo-1608571684358-66c2c17e01a2?q=80&w=400&auto=format&fit=crop", // Huile de coco
      description: "Hydrate et nourrit la peau en profondeur.",
      link: "/produit/1",
    },
    {
      id: 2,
      name: "Savon au Miel",
      category: "Savons",
      stars: 4,
      price: 5000,
      image: "https://images.unsplash.com/photo-1608245449230-9cb50e642d6a?q=80&w=400&auto=format&fit=crop", // Savon artisanal
      description: "Nettoie en douceur avec une touche sucrée.",
      link: "/produit/2",
    },
    {
      id: 3,
      name: "Gel Douche Agrumes",
      category: "Gels Douche",
      stars: 5,
      price: 8000,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop", // Gel douche
      description: "Rafraîchit et revitalise sous la douche.",
      link: "/produit/3",
    },
    {
      id: 4,
      name: "Mèches Brésiliennes",
      category: "Mèches",
      stars: 4.5,
      price: 25000,
      image: "https://images.unsplash.com/photo-1601049541289-9b1e8c2b5d48?q=80&w=400&auto=format&fit=crop", // Mèches de cheveux
      description: "Mèches soyeuses pour un style impeccable.",
      link: "/produit/4",
    },
    {
      id: 5,
      name: "Parfum Floral Éclat",
      category: "Parfums",
      stars: 4.8,
      price: 30000,
      image: "https://images.unsplash.com/photo-1596755939169-7d8785f71df8?q=80&w=400&auto=format&fit=crop", // Parfum floral
      description: "Une fragrance élégante et envoûtante.",
      link: "/produit/5",
    },
    {
      id: 6,
      name: "Pommade au Karité",
      category: "Pommades",
      stars: 3.5,
      price: 10000,
      image: "https://images.unsplash.com/photo-1576867757603-2f495e91e9e2?q=80&w=400&auto=format&fit=crop", // Pommade ou beurre
      description: "Renforce et fait briller vos cheveux.",
      link: "/produit/6",
    },
    {
      id: 7,
      name: "Lotion Hydratante Rose",
      category: "Lotions",
      stars: 5,
      price: 12000,
      image: "https://images.unsplash.com/photo-1601049541289-9b1e8c2b5d48?q=80&w=400&auto=format&fit=crop", // Lotion (alternative)
      description: "Hydratation longue durée au parfum délicat.",
      link: "/produit/7",
    },
    {
      id: 8,
      name: "Crème Anti-Âge",
      category: "Crèmes",
      stars: 4,
      price: 20000,
      image: "https://images.unsplash.com/photo-1594032190580-6fe514e32d70?q=80&w=400&auto=format&fit=crop", // Crème
      description: "Protège et rajeunit la peau.",
      link: "/produit/8",
    },
    {
      id: 9,
      name: "Parfum Bois de Santal",
      category: "Parfums",
      stars: 4.7,
      price: 35000,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop", // Parfum boisé
      description: "Un parfum boisé et raffiné.",
      link: "/produit/9",
    },
    {
      id: 10,
      name: "Mèches Ondulées",
      category: "Mèches",
      stars: 4.2,
      price: 28000,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop", // Mèches ondulées
      description: "Volume et élégance pour vos coiffures.",
      link: "/produit/10",
    },
    {
      id: 11,
      name: "Huile d’Argan",
      category: "Huiles",
      stars: 4.6,
      price: 18000,
      image: "https://images.unsplash.com/photo-1601049541289-9b1e8c2b5d48?q=80&w=400&auto=format&fit=crop", // Huile d’argan
      description: "Revitalise peau et cheveux.",
      link: "/produit/11",
    },
    {
      id: 12,
      name: "Savon à l’Avoine",
      category: "Savons",
      stars: 4.3,
      price: 6000,
      image: "https://images.unsplash.com/photo-1608245449230-9cb50e642d6a?q=80&w=400&auto=format&fit=crop", // Savon naturel
      description: "Apaise et exfolie en douceur.",
      link: "/produit/12",
    },
    {
      id: 13,
      name: "Gel Douche Lavande",
      category: "Gels Douche",
      stars: 4.9,
      price: 9000,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop", // Gel douche lavande
      description: "Détente et parfum apaisant.",
      link: "/produit/13",
    },
    {
      id: 14,
      name: "Mèches Lisses",
      category: "Mèches",
      stars: 4.4,
      price: 26000,
      image: "https://images.unsplash.com/photo-1601049541289-9b1e8c2b5d48?q=80&w=400&auto=format&fit=crop", // Mèches lisses
      description: "Élégance naturelle pour vos cheveux.",
      link: "/produit/14",
    },
    {
      id: 15,
      name: "Parfum Vanille Douce",
      category: "Parfums",
      stars: 4.6,
      price: 32000,
      image: "https://images.unsplash.com/photo-1596755939169-7d8785f71df8?q=80&w=400&auto=format&fit=crop", // Parfum vanille
      description: "Une senteur sucrée et chaleureuse.",
      link: "/produit/15",
    },
    {
      id: 16,
      name: "Pommade à l’Huile de Ricin",
      category: "Pommades",
      stars: 3.8,
      price: 11000,
      image: "https://images.unsplash.com/photo-1576867757603-2f495e91e9e2?q=80&w=400&auto=format&fit=crop", // Pommade
      description: "Favorise la croissance des cheveux.",
      link: "/produit/16",
    },
    {
      id: 17,
      name: "Lotion au Beurre de Cacao",
      category: "Lotions",
      stars: 4.7,
      price: 13000,
      image: "https://images.unsplash.com/photo-1601049541289-9b1e8c2b5d48?q=80&w=400&auto=format&fit=crop", // Lotion cacao
      description: "Nourrit et adoucit la peau.",
      link: "/produit/17",
    },
    {
      id: 18,
      name: "Crème Hydratante",
      category: "Crèmes",
      stars: 4.5,
      price: 22000,
      image: "https://images.unsplash.com/photo-1594032190580-6fe514e32d70?q=80&w=400&auto=format&fit=crop", // Crème hydratante
      description: "Hydratation intense pour tout type de peau.",
      link: "/produit/18",
    },
    {
      id: 19,
      name: "Huile de Jojoba",
      category: "Huiles",
      stars: 4.4,
      price: 17000,
      image: "https://images.unsplash.com/photo-1608571684358-66c2c17e01a2?q=80&w=400&auto=format&fit=crop", // Huile de jojoba
      description: "Équilibre et protège la peau.",
      link: "/produit/19",
    },
    {
      id: 20,
      name: "Savon Exfoliant",
      category: "Savons",
      stars: 4.2,
      price: 5500,
      image: "https://images.unsplash.com/photo-1608245449230-9cb50e642d6a?q=80&w=400&auto=format&fit=crop", // Savon exfoliant
      description: "Élimine les impuretés pour une peau lisse.",
      link: "/produit/20",
    },
  ];

  // Étendre à 80 produits en répétant et modifiant légèrement
  const fullProducts = Array.from({ length: 80 }, (_, index) => {
    const baseProduct = products[index % products.length];
    return {
      ...baseProduct,
      id: index + 1,
      name: `${baseProduct.name} ${index % products.length === 0 ? "" : `V${(index % products.length) + 1}`}`,
      link: `/produit/${index + 1}`,
      price: baseProduct.price + Math.floor(Math.random() * 5000), // Variation de prix
    };
  });

  // Filtrer les produits selon la recherche
  const filteredProducts = fullProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Variants pour animations
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.05 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 12px 24px rgba(159, 18, 57, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  // Fonction pour afficher les étoiles
  const renderStars = (rating) => {
    const stars = [];
    const ratingNum = parseFloat(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(ratingNum)) {
        stars.push(<FaStar key={i} className="text-amber-500" />);
      } else if (i === Math.ceil(ratingNum) && ratingNum % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-amber-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-amber-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200 dark:from-gray-800 dark:via-gray-900 dark:to-rose-900 py-16 px-6">
      {/* Formulaire de recherche */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un produit ou une catégorie..."
            className="w-full p-4 pr-12 rounded-lg border border-rose-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all duration-300"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-rose-600 dark:text-rose-300" />
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          {filteredProducts.length} produit(s) trouvé(s)
        </p>
      </motion.div>

      {/* Grille de produits */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={productb.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden relative group"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/400x400?text=Image+Indisponible")}
                  />
                  <div className="absolute inset-0 bg-rose-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="absolute top-2 right-2 bg-rose-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-rose-700 dark:text-rose-200 mb-2 truncate">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center mb-3">
                    {renderStars(product.stars)}
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      ({product.stars})
                    </span>
                  </div>
                  <p className="text-lg font-medium text-rose-600 dark:text-rose-300 mb-4">
                    {product.price.toLocaleString()} FCFA
                  </p>
                  <NavLink
                    to={product.link}
                    className="inline-block px-6 py-2 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 focus:ring-2 focus:ring-rose-400 transition-all duration-300 no-underline"
                  >
                    Voir Détails
                  </NavLink>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-300 text-lg">
              Aucun produit ne correspond à votre recherche.
            </p>
          )}
        </div>
      </motion.section>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <NavLink
          to="/"
          className="inline-block px-8 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 transition-all duration-300 no-underline"
        >
          Retour à l’Accueil
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Shop;