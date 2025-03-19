import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Box = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Medium',
      message:
        'Les tresses box classiques, idéales pour un look naturel et élégant.',
      route: '/classiques',
      gradient: 'from-pink-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'Box Braids Small',
      message:
        'Tresses box braids plus courtes, parfaites pour un entretien facile et rapide.',
      route: '/courtes',
      gradient: 'from-blue-500 to-green-500',
    },
    {
      id: 3,
      title: 'Box Braids Large',
      message:
        'Des box braids large et volumineuses pour un style audacieux.',
      route: '/longues',
      gradient: 'from-teal-500 to-purple-500',
    },

  ]);

  return (
    <div className="flex justify-center my-20 flex-wrap gap-8 p-8">

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

export default Box;
