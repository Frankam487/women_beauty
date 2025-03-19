import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate()
  // Utilisation de l'état pour gérer l'affichage de la carte
  const [isVisible, setIsVisible] = useState(true);
const handleRendezVous = () => {
  navigate('/reserver');
}
  // Fonction pour fermer la carte
  const closeCard = () => {
    setIsVisible(false);
  };

  // Si la carte n'est pas visible, on ne l'affiche pas
  if (!isVisible) return null;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
      {/* Bouton de fermeture en haut à droite */}
      <button
        onClick={closeCard}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Medium / Large Box-Braids
        </h2>
        <p className="text-gray-600 mb-4">avec BeautyExpress</p>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Durée</span>
            <span className="font-semibold text-gray-900">3 heures</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Prix</span>
            <span className="font-semibold text-gray-900">130,00 $CA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">+18- NECK LENGTH</span>
            <span className="font-semibold text-gray-900">-20,00 $CA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">+4- BOHO STYLE</span>
            <span className="font-semibold text-gray-900">
              1 heure à 30,00 $CA
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">
              +5- X Pression pre-stretched hair 42 pouces (1b or 2)
            </span>
            <span className="font-semibold text-gray-900">
              1 minute à 30,00 $CA
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <button onClick={() => handleRendezVous()} className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Réserver maintenant
        </button>
      </div>
    </div>
  );
};

export default Card;
