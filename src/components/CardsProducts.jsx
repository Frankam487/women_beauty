import React from 'react';
import List from "../components/List";
import {NavLink} from "react-router-dom";
import { motion } from 'framer-motion'
const CardsProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12">
      <motion.div
        className="bg-white shadow-lg p-6 rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-semibold">Huiles Naturelles</h2>
        <p>Découvrez nos huiles 100% naturelles pour une peau éclatante.</p>
        <NavLink to="/huiles" className="text-blue-500 mt-2 inline-block">
          Voir plus
        </NavLink>
      </motion.div>

      <motion.div
        className="bg-white shadow-lg p-6 rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-semibold">Parfums de Luxe</h2>
        <p>Des fragrances envoûtantes pour sublimer votre présence.</p>
        <NavLink to="/parfums" className="text-blue-500 mt-2 inline-block">
          Voir plus
        </NavLink>
      </motion.div>

      <motion.div
        className="bg-white shadow-lg p-6 rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-xl font-semibold">Gels Douche</h2>
        <p>Offrez-vous un moment de fraîcheur avec nos gels douche parfumés.</p>
        <NavLink to="/gels-douche" className="text-blue-500 mt-2 inline-block">
          Voir plus
        </NavLink>
      </motion.div>
    </div>
  );
}

export default CardsProducts
