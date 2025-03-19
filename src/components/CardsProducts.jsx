import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CardsProducts = () => {
  const datas = [
    {
      id: 1,
      name: "Huiles Naturelles",
      stars: 3,
      image:
        "https://cdn.pixabay.com/photo/2017/06/07/12/19/oil-2388255_1280.jpg",
      description:
        "Des huiles 100% naturelles pour nourrir et hydrater votre peau.",
      link: "./",
    },
    {
      id: 2,
      name: "Savons Artisanaux",
      stars: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/06/15/soap-1863850_1280.jpg",
      description:
        "Savons faits à la main, doux et parfumés pour une peau éclatante.",
      link: "./",
    },
    {
      id: 3,
      name: "Gels Douche",
      stars: 5,
      image:
        "https://cdn.pixabay.com/photo/2020/01/13/14/38/shower-gel-4762950_1280.jpg",
      description:
        "Offrez-vous un moment de fraîcheur et de détente sous la douche.",
      link: "./",
    },
    {
      id: 4,
      name: "Mèches de Qualité",
      stars: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/03/27/19/22/hair-1281059_1280.jpg",
      description: "Sublimez votre coiffure avec nos mèches de haute qualité.",
      link: "./",
    },
    {
      id: 5,
      name: "Pommades Capillaires",
      stars: 3,
      image:
        "https://cdn.pixabay.com/photo/2016/03/05/20/08/hair-dresser-1232256_1280.jpg",
      description:
        "Pommades nourrissantes pour des cheveux forts et brillants.",
      link: "./",
    },
    {
      id: 6,
      name: "Lotions Hydratantes",
      stars: 5,
      image:
        "https://cdn.pixabay.com/photo/2017/07/28/14/28/cosmetics-2549746_1280.jpg",
      description: "Lotions hydratantes pour une peau douce et éclatante.",
      link: "./",
    },
    {
      id: 7,
      name: "Crèmes de Soin",
      stars: 4,
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/12/53/cream-1840438_1280.jpg",
      description:
        "Des crèmes riches en vitamines pour une peau protégée et éclatante.",
      link: "./",
    },
  ];

  return (
    <div className="px-8 py-12 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Faites votre choix
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {datas.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm">{product.description}</p>

              {/* Affichage des étoiles */}
              <div className="mt-2 text-yellow-500">
                {"★".repeat(product.stars) + "☆".repeat(5 - product.stars)}
              </div>

              <NavLink
                to={product.link}
                className="mt-3 inline-block bg-gray-800 text-white px-4 py-2  hover:bg-blue-600 transition"
              >
                Voir plus
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardsProducts;
