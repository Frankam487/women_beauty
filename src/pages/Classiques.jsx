import { NavLink } from 'react-router-dom';

const Classiques = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full">
        <div className="flex justify-center mb-6">
          <img
            src="/box-men.jpg"
            alt="Box Braids Classiques"
            className="w-full sm:w-auto h-94 object-cover object-center rounded-lg shadow-lg"
          />

        </div>

        <h2 className="text-3xl my-24 font-semibold text-center text-gray-800 mb-4">
          Box Braids Men
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Les Box Braids men sont parfaites pour un look élégant et naturel. Ces
          tresses sont idéales pour celles qui recherchent une coiffure
          intemporelle et pratique. Elles sont faciles à entretenir et peuvent
          durer plusieurs semaines.
        </p>

        <div className="text-center">
          <NavLink
            to="/reserver"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all"
          >
            Réserver maintenant
          </NavLink>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Caractéristiques :
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-lg">
            <li>Idéales pour un look naturel et élégant</li>
            <li>Durabilité de plusieurs semaines</li>
            <li>Faciles à entretenir</li>
            <li>Disponible en différentes tailles et longueurs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Classiques;
