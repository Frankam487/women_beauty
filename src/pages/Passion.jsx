import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Passion = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Fulani Small',
      message:
        'Les twists classiques, une coiffure élégante et légère pour un look naturel.',
      route: '/passion1',
      gradient: 'from-pink-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'Fulani Medium',
      message:
        'Les twists courts, parfaits pour un entretien facile tout en gardant un look moderne.',
      route: '/passion2',
      gradient: 'from-blue-500 to-green-500',
    },
    {
      id: 3,
      title: 'Fulani Large',
      message:
        'Les Fulani Large, offrant un look audacieux et une grande liberté de style.',
      route: '/passion3',
      gradient: 'from-teal-500 to-purple-500',
    },
  ]);

  return (
    <div className="flex my-20 justify-center flex-wrap gap-8 p-8">

      {data.map(({ id, title, message, route, gradient }) => (
        <div
          key={id}
          className="bg-white p-6 max-w-xs w-full rounded-lg shadow-md hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
          <p className="text-gray-600 text-center mb-4">{message}</p>
          <NavLink
            to={route}
            className={`inline-block w-full text-center py-2 bg-gradient-to-r ${gradient} text-white rounded-lg hover:scale-105 transition-all`}>
            Voir plus
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Passion;
