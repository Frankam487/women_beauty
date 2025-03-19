import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Soft = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Locs Small',
      message:
        'Les tresses box classiques, idéales pour un look naturel et élégant.',
      route: '/soft1',
      gradient: 'from-pink-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'Locs Medium',
      message:
        'Tresses box braids plus courtes, parfaites pour un entretien facile et rapide.',
      route: '/soft2',
      gradient: 'from-blue-500 to-green-500',
    },
    {
      id: 3,
      title: 'Locs Large',
      message: 'Des box braids large et volumineuses pour un style audacieux.',
      route: '/soft3',
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

export default Soft;
