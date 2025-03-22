import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";


const productsData = [
  {
    id: 1,
    name: "Huiles Naturelles",
    stars: 3,
    image: "/oils.jpg",
    description: "Des huiles 100% naturelles pour nourrir et hydrater votre peau.",
    price: 19.99, 
    details: "Fabriqué à partir d'ingrédients bio, sans parabènes ni sulfates.",
  },
  {
    id: 2,
    name: "Savons Artisanaux",
    stars: 4,
    image: "/savon.jpg",
    description: "Savons faits à la main, doux et parfumés pour une peau éclatante.",
    price: 9.99,
    details: "Disponible en plusieurs parfums : lavande, citron, et rose.",
  },
  {
    id: 3,
    name: "Gels Douche",
    stars: 5,
    image: "/gels.jpg",
    description: "Offrez-vous un moment de fraîcheur et de détente sous la douche.",
    price: 14.99,
    details: "Formule hydratante avec extraits naturels.",
  },
  {
    id: 4,
    name: "Mèches de Qualité",
    stars: 4,
    image: "https://cdn.pixabay.com/photo/2016/03/27/19/22/hair-1281059_1280.jpg",
    description: "Sublimez votre coiffure avec nos mèches de haute qualité.",
    price: 29.99,
    details: "Résistantes et faciles à coiffer, longueur : 20 pouces.",
  },
  {
    id: 5,
    name: "Pommades Capillaires",
    stars: 3,
    image: "/pommades.jpg",
    description: "Pommades nourrissantes pour des cheveux forts et brillants.",
    price: 12.99,
    details: "Enrichie en huile d'argan et vitamine E.",
  },
  {
    id: 6,
    name: "Lotions Hydratantes",
    stars: 5,
    image: "/lotions.jpg",
    description: "Lotions hydratantes pour une peau douce et éclatante.",
    price: 17.99,
    details: "Texture légère, absorption rapide.",
  },
  {
    id: 7,
    name: "Crèmes de Soin",
    stars: 4,
    image: "https://cdn.pixabay.com/photo/2016/11/21/12/53/cream-1840438_1280.jpg",
    description: "Des crèmes riches en vitamines pour une peau protégée et éclatante.",
    price: 24.99,
    details: "Protection contre les agressions extérieures.",
  },
  {
    id: 8,
    name: "Déodorants",
    stars: 4,
    image: "/deodorants.jpg",
    description: "Restez frais toute la journée avec nos déodorants naturels.",
    price: 8.99,
    details: "Sans aluminium, longue tenue.",
  },
  {
    id: 9,
    name: "Parfums",
    stars: 4,
    image: "/parfums.jpg",
    description: "Des fragrances uniques pour une présence inoubliable.",
    price: 39.99,
    details: "Notes florales et boisées, 50ml.",
  },
  {
    id: 10,
    name: "Déodorants",
    stars: 4,
    image: "/deodorants.jpg",
    description: "Protection efficace et naturelle contre les odeurs.",
    price: 8.99,
    details: "Formule vegan, testée dermatologiquement.",
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const product = productsData.find((p) => p.id === parseInt(id)); // Trouve le produit correspondant

  // Si le produit n'est pas trouvé
  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Produit non trouvé</h1>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Retour à la liste
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto bg-gray-100 mt-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
            loading="lazy"
            onError={(e) => (e.target.src = "/fallback-image.jpg")}
          />
        </div>
        {/* Détails */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-yellow-500 mb-4">
              {"★".repeat(product.stars) + "☆".repeat(5 - product.stars)} (
              {product.stars} / 5)
            </p>
            <p className="text-gray-700 mb-4">{product.details}</p>
            <p className="text-2xl font-semibold text-gray-800">
              {product.price} €
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Ajouter au panier
            </button>
            <Link
              to="/"
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Retour
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;