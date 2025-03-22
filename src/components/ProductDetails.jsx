import "animate.css";
import React from "react";
import { FaArrowLeft, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import Footer from "./Footer";

// Liste des produits (je réutilise la même liste que dans ton composant Products)
const productsList = [
  {
    id: 1,
    name: "Crème Hydratantee",
    category: "Soins de la peau",
    description: "Crème hydratante pour peau sèche, nourrissante et apaisante.",
    detailedDescription:
      "Formulée avec de l'acide hyaluronique et du beurre de karité, cette crème offre une hydratation intense pendant 24 heures. Idéale pour les peaux sensibles ou déshydratées.",
    price: 25,
    currency: "CHF",
    imageUrl: "./creme-hydratante.jpg",
    rating: 4.5,
    stock: 10,
    ingredients: ["Acide hyaluronique", "Beurre de karité", "Aloe vera"],
    reviews: [
      { user: "Sophie", comment: "Super hydratante !", rating: 5 },
      { user: "Emma", comment: "Un peu collante au début.", rating: 4 },
    ],
  },
  {
    id: 2,
    name: "Rouge à lèvres Mat",
    category: "Maquillage",
    description: "Rouge à lèvres longue tenue, effet mat et couvrance parfaite.",
    detailedDescription:
      "Ce rouge à lèvres offre une tenue jusqu'à 12 heures sans retouche. Sa formule enrichie en vitamine E protège vos lèvres tout en offrant une couleur vibrante.",
    price: 18,
    currency: "CHF",
    imageUrl: "./rouge-levres-mat.jpg",
    rating: 4.8,
    stock: 5,
    ingredients: ["Vitamine E", "Pigments mats", "Huile de jojoba"],
    reviews: [
      { user: "Léa", comment: "Couleur incroyable !", rating: 5 },
      { user: "Marie", comment: "Tenue parfaite.", rating: 4.5 },
    ],
  },
  {
    id: 3,
    name: "Shampooing Nourrissant",
    category: "Soins capillaires",
    description: "Shampooing hydratant pour cheveux secs et abîmés.",
    detailedDescription:
      "Un shampooing doux enrichi en huile d'argan et kératine pour réparer les cheveux abîmés et leur redonner de la brillance.",
    price: 15,
    currency: "FCFA",
    imageUrl: "../../public/shampiong2.jpg",
    rating: 4.2,
    stock: 0,
    ingredients: ["Huile d'argan", "Kératine", "Extrait de camomille"],
    reviews: [
      { user: "Clara", comment: "Cheveux doux après usage.", rating: 4 },
      { user: "Julie", comment: "Pas assez moussant.", rating: 3.5 },
    ],
  },
  {
    id: 4,
    name: "Fond de Teint",
    category: "Maquillage",
    description: "Fond de teint léger et fluide pour un teint naturel.",
    detailedDescription:
      "Ce fond de teint offre une couvrance modulable avec une formule non comédogène adaptée à tous les types de peaux.",
    price: 3000,
   
    currency: "FCFA",
    imageUrl: "./fond-de-teint.jpg",
    rating: 4.7,
    stock: 8,
    ingredients: ["Silice", "Eau thermale", "Pigments naturels"],
    reviews: [
      { user: "Anna", comment: "Effet naturel garanti.", rating: 5 },
      { user: "Laura", comment: "Un peu léger pour moi.", rating: 4 },
    ],
  },
  {
    id: 5,
    name: "Sérum Anti-âge",
    category: "Soins de la peau",
    description: "Sérum anti-âge avec effet liftant et raffermissant.",
    detailedDescription:
      "Un sérum puissant avec du rétinol et des peptides pour réduire les rides et améliorer l'élasticité de la peau.",
    price: 5000,
    currency: "FCFA",
    imageUrl: "./serum-anti-age.jpg",
    rating: 4.9,
    stock: 3,
    ingredients: ["Rétinol", "Peptides", "Vitamine C"],
    reviews: [
      { user: "Nina", comment: "Peau plus ferme en 2 semaines !", rating: 5 },
      { user: "Zoé", comment: "Top produit.", rating: 4.8 },
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const product = productsList.find((p) => p.id === parseInt(id));

  // Si le produit n'existe pas
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 via-rose-100 to-rose-200">
        <h2 className="text-2xl font-semibold text-rose-700">
          Produit non trouvé
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen my-24 flex flex-col items-center bg-gradient-to-r from-rose-50 via-rose-100 to-rose-200 p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 animate__animated animate__fadeIn">
        {/* Bouton Retour */}
        <NavLink
          to="/products"
          className="flex items-center text-rose-600 hover:text-rose-700 font-semibold mb-6 no-underline"
        >
          <FaArrowLeft className="mr-2" /> Retour aux produits
        </NavLink>

        {/* Contenu Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <img
            src={product.imageUrl}
            alt={`Image de ${product.name}`}
            loading="lazy"
            className="w-full h-98 object-cover rounded-lg shadow-md"
          />

          {/* Détails */}
          <div>
            <h1 className="text-3xl font-bold text-rose-700 mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-rose-500 mb-4">{product.category}</p>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-rose-600 font-medium">{product.rating}</span>
              <span className="text-gray-500 ml-2">
                ({product.reviews.length} avis)
              </span>
            </div>
            <p className="text-lg font-bold text-rose-700 mb-4">
              {product.price} {product.currency}
            </p>
            <p
              className={`text-sm mb-4 ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0 ? `${product.stock} en stock` : "Rupture de stock"}
            </p>
            <p className="text-rose-600 mb-6">{product.detailedDescription}</p>

            {/* Ingrédients */}
            <h3 className="text-lg font-semibold text-rose-700 mb-2">
              Ingrédients clés
            </h3>
            <ul className="list-disc pl-5 text-rose-600 mb-6">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* Bouton Ajouter au Panier */}
            <button
              disabled={product.stock === 0}
              className={`w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-all ${
                product.stock > 0
                  ? "bg-rose-600 text-white hover:bg-rose-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <FaShoppingCart className="mr-2" />
              {product.stock > 0 ? "Ajouter au panier" : "Indisponible"}
            </button>
          </div>
        </div>

        {/* Avis */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-rose-700 mb-4">
            Avis des clients
          </h3>
          {product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div
                key={index}
                className="border-t border-rose-100 py-4 flex items-start"
              >
                <div className="flex-1">
                  <p className="font-semibold text-rose-600">{review.user}</p>
                  <p className="text-rose-500">{review.comment}</p>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-rose-600">{review.rating}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-rose-500">Aucun avis pour le moment.</p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetails;