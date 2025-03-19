import { useNavigate } from 'react-router-dom'; // Importer useNavigate de react-router-dom
import Header from '../components/Header';

const Service1 = () => {
  const navigate = useNavigate(); // Initialiser le hook navigate

  // Fonction qui gère la redirection selon l'ID du service
  const handleSelect = (serviceId) => {
    navigate(`/service1Details1/${serviceId}`); // Redirige vers le composant ServiceDetail avec l'ID du service
  };

  return (
    <div className="service1 bg-gray-400">
      <Header />
      <div className="card-container py-10 mx-9 mt-20">
        {/* Service 1 */}
        <div className="cards bg-blue-50 flex justify-center items-center shadow-md w-full p-7">
          <div className="text">
            <h6>Medium/Large Box-Braids</h6>
            <em>3h à 100 FA</em>
          </div>
          <button
            onClick={() => handleSelect(1)} // Appeler handleSelect avec l'ID du service
            className="w-full sm:w-auto h-[45px] bg-black text-white py-2 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">
            Sélectionner
          </button>
        </div>

        {/* Service 2 */}
        <div className="cards bg-blue-50 flex justify-center items-center shadow-md w-full p-7">
          <div className="text">
            <h6>Médium Box-Braids</h6>
            <em>3h à 100 FA</em>
          </div>
          <button
            onClick={() => handleSelect(2)} // Appeler handleSelect avec l'ID du service
            className="w-full sm:w-auto h-[45px] bg-black text-white py-2 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">
            Sélectionner
          </button>
        </div>

        {/* Service 3 */}
        <div className="cards bg-blue-50 flex justify-center items-center shadow-md w-full p-7">
          <div className="text">
            <h6>Medium/Large Box-Braids</h6>
            <em>3h à 100 FA</em>
          </div>
          <button
            onClick={() => handleSelect(3)} // Appeler handleSelect avec l'ID du service
            className="w-full sm:w-auto h-[45px] bg-black text-white py-2 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">
            Sélectionner
          </button>
        </div>

        {/* Service 4 */}
        <div className="cards shadow-md bg-blue-50 flex justify-center items-center w-full p-7">
          <div className="text">
            <h6 className="">Medium/Large Box-Braids</h6>
            <em>3h à 100 FA</em>
          </div>
          <button
            onClick={() => handleSelect(4)} // Appeler handleSelect avec l'ID du service
            className="w-full sm:w-auto h-[45px] bg-black text-white py-2 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">
            Sélectionner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service1;
