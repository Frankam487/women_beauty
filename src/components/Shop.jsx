import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearch } from "react-icons/fa";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const products = Array.from({ length: 80 }, (_, index) => {
    const id = index + 1;
    const categories = ["Huiles", "Savons", "Gels Douche", "Mèches", "Parfums", "Pommades", "Lotions", "Crèmes"];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const names = [
      "Huile de Coco", "Savon au Miel", "Gel Agrumes", "Mèches Brésiliennes", "Parfum Floral", 
      "Pommade Karité", "Lotion Rose", "Crème Anti-Âge", "Huile d'Argan", "Parfum Boisé"
    ];
    const name = `${names[Math.floor(Math.random() * names.length)]} ${id}`;
    return {
      id,
      name,
      category,
      stars: (Math.random() * 2 + 3).toFixed(1), // Entre 3 et 5 étoiles
      price: Math.floor(Math.random() * 30000) + 5000, // Entre 5000 et 35000 FCFA
      image: `https://source.unsplash.com/400x400/?${encodeURIComponent(category.toLowerCase())},beauty,product&sig=${id}`,
      description: `Un produit ${category.toLowerCase()} de qualité pour sublimer votre beauté.`,
      link: `/produit/${id}`,
    };
  });

  // Filtrer les produits selon la recherche
  const filteredProducts = products.filter((product) =>
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
    <div className="min-h-screen mt-14 bg-gradient-to-br from-rose-50 via-rose-100 to-rose-300 dark:from-gray-800 dark:via-gray-900 dark:to-rose-900 py-16 px-6">
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
                key={product.id}
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

      {/* Bouton Retour */}
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