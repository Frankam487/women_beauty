import { NavLink } from 'react-router-dom';

const CoiffureDetail = ({ image, title, description, features, route }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
        {/* Section Image */}
        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover  shadow-xl "
          />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          {title}
        </h2>


        <p className="text-lg text-gray-700 text-center mb-8">{description}</p>


        <div className="text-center mb-8">
          <NavLink
            to={route}
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold rounded-lg hover:scale-105 transition-all no-underline">
            Réserver maintenant
          </NavLink>
        </div>

        {/* Section Caractéristiques */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Caractéristiques :
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-lg">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoiffureDetail;
