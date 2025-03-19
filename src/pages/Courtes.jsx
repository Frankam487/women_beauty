import { NavLink } from 'react-router-dom';

const Courtes = () => {
  return (
    <div className="flex my-24 justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <div className="flex justify-center mb-6">
          <img
            src="/courte.jpg"
            alt="Box Braids Longues"
            className="w-full sm:w-auto h-80 object-cover object-center rounded-sm shadow-lg"
          />
        </div>

        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Box Braids Small
        </h2>

        <p className="text-lg text-gray-700 text-center mb-8">
          Les Box Braids Longues sont parfaites pour celles qui recherchent une
          coiffure audacieuse et stylée. Elles offrent une élégance intemporelle
          et peuvent être portées de différentes manières pour s'adapter à
          toutes vos envies.
        </p>
        <div className="text-center mb-8">
          <NavLink
            to="/reserver"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all"
          >
            Réserver maintenant
          </NavLink>
        </div>

        {/* Section Caractéristiques */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Caractéristiques :
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-lg">
            <li>Idéales pour un look audacieux et élégant</li>
            <li>Offrent une grande polyvalence de styles</li>
            <li>Longueur permettant différents styles de coiffure</li>
            <li>Durabilité de plusieurs semaines avec peu d'entretien</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courtes;
