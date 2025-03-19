import { useState } from 'react';
import { motion } from 'framer-motion'; // Pour les animations de transition

const Reservation = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedServiceInfo, setSelectedServiceInfo] = useState('');
  const [selectedServiceImage, setSelectedServiceImage] = useState('');

  // Liste des services avec images
  const services = [
    {
      name: 'Coupe de cheveux',
      image: '/images/coupe.jpg',
      description:
        'Profitez d’une coupe de cheveux moderne et adaptée à votre style.',
    },
    {
      name: 'Coloration',
      image: '/images/coloration.jpg',
      description: 'Coloration professionnelle pour illuminer votre look.',
    },
    {
      name: 'Permanente',
      image: '/images/permanente.jpg',
      description:
        'Obtenez des boucles parfaites avec notre service de permanente.',
    },
    {
      name: 'Coiffure spéciale',
      image: '/images/coiffure-speciale.jpg',
      description: 'Des coiffures uniques pour toutes les occasions spéciales.',
    },
    {
      name: 'Lissage Brésilien',
      image: '/images/lissage.jpg',
      description: 'Un lissage parfait pour des cheveux lisses et brillants.',
    },
  ];

  // Dates disponibles
  const availableDates = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

  // Informations du propriétaire du site web
  const ownerInfo = {
    name: 'Salon Élégance',
    email: 'contact@salon-elégance.com',
    phone: '123-456-7890',
  };

  // Animation settings
  const animationSettings = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  // Étape suivante
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // Étape précédente
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  // Soumettre la réservation
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation pour ${selectedService} confirmée!`);
    setStep(4); // Passer à la confirmation
  };

  // Ouvrir le pop-up
  const handleCardClick = (service) => {
    setSelectedService(service.name);
    setSelectedServiceInfo(service.description);
    setSelectedServiceImage(service.image);
    setShowPopup(true);
  };

  // Fermer le pop-up
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
     
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl w-96"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animationSettings.transition}>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              {selectedService}
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src={selectedServiceImage}
                alt={selectedService}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <p className="text-lg text-gray-800 mb-4">{selectedServiceInfo}</p>
            <div className="text-gray-800">
              <p>
                <strong>Propriétaire:</strong> {ownerInfo.name}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${ownerInfo.email}`} className="text-teal-600">
                  {ownerInfo.email}
                </a>
              </p>
              <p>
                <strong>Téléphone:</strong> {ownerInfo.phone}
              </p>
            </div>
            <button
              onClick={closePopup}
              className="mt-6 px-6 py-3 rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300">
              Fermer
            </button>
          </motion.div>
        </div>
      )}

      {/* Formulaire de Réservation */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={animationSettings.transition}>
        <h2 className="text-3xl font-bold text-teal-600 text-center mb-4">
          Réservez Votre Rendez-vous
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Choisissez vos services et détails pour une expérience de coiffure
          exceptionnelle.
        </p>

        {step === 1 && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animationSettings.transition}>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Choisissez un Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`p-4 border-2 rounded-lg cursor-pointer hover:bg-teal-100 transition duration-300 ${
                    selectedService === service.name
                      ? 'bg-teal-100 text-teal-600'
                      : 'bg-white text-teal-600'
                  }`}
                  onClick={() => handleCardClick(service)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <h4 className="text-xl font-semibold">{service.name}</h4>
                  <p className="text-sm mt-2">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <button
              onClick={handleNextStep}
              disabled={!selectedService}
              className={`mt-6 px-6 py-3 rounded-lg text-white bg-teal-500 disabled:bg-gray-400 transition-all duration-300 hover:bg-teal-600`}>
              Continuer
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animationSettings.transition}>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Choisissez une Date
            </h3>
            <div className="flex flex-wrap gap-4">
              {availableDates.map((date, index) => (
                <motion.div
                  key={index}
                  className={`p-4 border-2 rounded-lg cursor-pointer hover:bg-teal-100 transition duration-300 ${
                    selectedDate === date
                      ? 'bg-teal-100 text-teal-600'
                      : 'bg-white text-teal-600'
                  }`}
                  onClick={() => setSelectedDate(date)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <h4 className="text-xl font-semibold">{date}</h4>
                  <p className="text-sm mt-2">
                    Réservez votre créneau pour ce jour-là.
                  </p>
                </motion.div>
              ))}
            </div>
            <button
              onClick={handlePrevStep}
              className="mt-6 px-6 py-3 rounded-lg text-white bg-teal-500 transition-all duration-300 hover:bg-teal-600 mr-4">
              Retour
            </button>
            <button
              onClick={handleNextStep}
              disabled={!selectedDate}
              className={`mt-6 px-6 py-3 rounded-lg text-white bg-teal-500 disabled:bg-gray-400 transition-all duration-300 hover:bg-teal-600`}>
              Continuer
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animationSettings.transition}>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Informations Personnelles
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-teal-600 block mb-2">Nom</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-3 border-2 rounded-lg text-gray-700"
                  required
                />
              </div>
              <div>
                <label className="text-teal-600 block mb-2">Email</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full p-3 border-2 rounded-lg text-gray-700"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-6 px-6 py-3 rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300">
                  Réserver Maintenant
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={animationSettings.transition}>
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Réservation Confirmée!
            </h3>
            <p className="text-lg text-teal-600">
              Merci {userName}! Votre réservation pour {selectedService} le{' '}
              {selectedDate} a bien été prise en compte.
            </p>
            <p className="text-teal-600 mt-4">
              Un e-mail de confirmation vous a été envoyé.
            </p>
            <button
              onClick={() => setStep(1)}
              className="mt-6 px-6 py-3 rounded-lg text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300">
              Réserver un autre service
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Reservation;
