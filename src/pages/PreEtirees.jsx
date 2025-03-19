import { NavLink } from 'react-router-dom';

const PreEtirees = () => {
  return (
    <div className="flex my-20 justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
        {/* Section Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://example.com/pre-etirees.jpg" // Remplace par ton image
            alt="Box Braids Pré-étirées"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Section Titre */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Box Braids Pré-étirées
        </h2>

        {/* Section Description */}
        <p className="text-lg text-gray-700 text-center mb-8">
          Les Box Braids Pré-étirées offrent une solution rapide et pratique
          pour obtenir des tresses impeccables. Grâce à leur texture lissée,
          elles permettent une installation plus rapide tout en offrant un
          résultat naturel et élégant.
        </p>

        {/* Section Réservation */}
        <div className="text-center mb-8">
          <NavLink
            to="/reserve" // Remplace par la route vers la réservation ou la page souhaitée
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all">
            Réserver maintenant
          </NavLink>
        </div>

        {/* Section Caractéristiques */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Caractéristiques :
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-lg">
            <li>Installation rapide grâce à leur pré-étirement</li>
            <li>Résultat lisse et naturel</li>
            <li>Moins de manipulation, idéal pour les cheveux fins</li>
            <li>Disponible en plusieurs couleurs et tailles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreEtirees;
