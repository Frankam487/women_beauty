import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Twist = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Twists Medium",
      message:
        "Les twists classiques, une coiffure élégante et légère pour un look naturel.",
      route: "/twistClassique",
      gradient: "from-pink-500 to-indigo-500",
    },
    {
      id: 2,
      title: "Twists Small",
      message:
        "Les twists courts, parfaits pour un entretien facile tout en gardant un look moderne.",
      route: "/twistCourt",
      gradient: "from-blue-500 to-green-500",
    },
    {
      id: 3,
      title: "Twists Large",
      message:
        "Les twists large, offrant un look audacieux et une grande liberté de style.",
      route: "/twistLong",
      gradient: "from-teal-500 to-purple-500",
    },
  ]);

  return (
    <div className="flex my-20 justify-center flex-wrap gap-8 p-8">
      {data.map(({ id, title, message, route, gradient }) => (
        <motion.div
          key={id}
          className="bg-white p-6 max-w-xs w-full rounded-lg hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: id * 0.2 }}
        >
          <motion.h3
            className="text-xl font-semibold text-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-600 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {message}
          </motion.p>
          <NavLink
            to={route}
            className={`inline-block w-full text-center py-2 bg-gradient-to-r ${gradient} text-white rounded-lg hover:scale-105 transition-all`}
          >
            Voir plus
          </NavLink>
        </motion.div>
      ))}
    </div>
  );
};

export default Twist;
