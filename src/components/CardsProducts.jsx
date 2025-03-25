import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Sous-composant pour une carte produit
const ProductCard = ({ product }) => {
  const handleImageError = (e) => {
    e.target.src = "/fallback-image.jpg"; // Image de secours
  };

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.05 }}
      role="article"
      aria-labelledby={`product-${product.id}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
        loading="lazy" // Lazy loading pour optimisation
        onError={handleImageError} // Gestion des erreurs d'image
      />
      <div className="p-4">
        <h2
          id={`product-${product.id}`}
          className="text-lg font-semibold text-gray-800"
        >
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <div
          className="mt-2 text-yellow-500"
          aria-label={`Note : ${product.stars} sur 5`}
        >
          {"★".repeat(product.stars) + "☆".repeat(5 - product.stars)}
        </div>
        <NavLink
          to={`/products/${product.id}`} // Route dynamique
          className="mt-3 inline-block bg-gray-800 text-white px-4 py-2 hover:bg-blue-600 transition"
          aria-label={`Voir plus de détails sur ${product.name}`}
        >
          Voir plus
        </NavLink>
      </div>
    </motion.div>
  );
};

const CardsProducts = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; 


  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-8 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Faites votre choix
      </h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-600">Aucun produit disponible</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                aria-label={`Page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardsProducts;