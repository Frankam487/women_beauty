import React, { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import "animate.css";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const productsList = [
  {
    id: 1,
    name: "Crème Hydratante",
    category: "Soins de la peau",
    description: "Crème hydratante pour peau sèche, nourrissante et apaisante.",
    price: 2500, // Prix en nombre pour faciliter les calculs
    currency: "FCFA",
    imageUrl: "./creme-hydratante.jpg",
    rating: 4.5,
    stock: 10, // Ajout de la gestion de stock
  },
  {
    id: 2,
    name: "Rouge à lèvres Mat",
    category: "Maquillage",
    description: "Rouge à lèvres longue tenue, effet mat et couvrance parfaite.",
    price: 1800,
    currency: "FCFA",
    imageUrl: "./rouge-levres-mat.jpg",
    rating: 4.8,
    stock: 5,
  },
  {
    id: 3,
    name: "Shampooing Nourrissant",
    category: "Soins capillaires",
    description: "Shampooing hydratant pour cheveux secs et abîmés.",
    price: 1500,
    currency: "FCFA",
    imageUrl: "./shampooing-nourrissant.jpg",
    rating: 4.2,
    stock: 0, 
  },
  {
    id: 4,
    name: "Fond de Teint",
    category: "Maquillage",
    description: "Fond de teint léger et fluide pour un teint naturel.",
    price: 1000,
    currency: "FCFA",
    imageUrl: "./fond-de-teint.jpg",
    rating: 4.7,
    stock: 8,
  },
  {
    id: 5,
    name: "Sérum Anti-âge",
    category: "Soins de la peau",
    description: "Sérum anti-âge avec effet liftant et raffermissant.",
    price: 55,
    currency: "FCFA",
    imageUrl: "./serum-anti-age.jpg",
    rating: 4.9,
    stock: 3,
  },
];

const Products = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? productsList
      : productsList.filter((product) => product.category === filter);

  return (
    <div className=" my-24 flex flex-col items-center bg-gradient-to-r from-rose-50 via-rose-100 to-rose-200 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4 animate__animated animate__fadeInDown">
          Nos Produits de Beauté
        </h1>
        <p className="text-lg md:text-xl text-rose-600 font-medium animate__animated animate__fadeInUp">
          Sublimez votre beauté avec notre sélection premium.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {["All", "Soins de la peau", "Maquillage", "Soins capillaires"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
              filter === category
                ? "bg-rose-600 text-white shadow-lg"
                : "bg-rose-100 text-rose-700 hover:bg-rose-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-6 animate__animated animate__fadeInUp"
          >
            <img
              src={product.imageUrl}
              alt={`Image de ${product.name}`}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-rose-600 truncate">
              {product.name}
            </h2>
            <p className="text-sm text-rose-500 mb-3 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center mb-3">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-rose-600 font-medium">{product.rating}</span>
            </div>
            <p className="text-lg font-bold text-rose-700">
              {product.price} {product.currency}
            </p>
            <p
              className={`text-sm mb-4 ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0 ? `${product.stock} en stock` : "Rupture de stock"}
            </p>
            <div className="flex gap-2">
              <NavLink
                to={`/produit/${product.id}`}
                className="flex-1 text-center px-3 py-2 rounded-lg bg-rose-100 text-rose-700 font-semibold hover:bg-rose-200 transition-all no-underline"
              >
                Détails
              </NavLink>
              <button
                disabled={product.stock === 0}
                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                  product.stock > 0
                    ? "bg-rose-600 text-white hover:bg-rose-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <NavLink
                  to="/ajouter-au-panier"
                  className="no-underline text-inherit flex items-center justify-center"
                >
                  Ajouter <FaArrowRight className="ml-2" />
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Products;