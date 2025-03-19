import { useState, useEffect } from 'react';
import RendezVous from '../components/RendezVous';

const Service1Details1 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [daysOfYear, setDaysOfYear] = useState([]);

  // Données des options et de leur disponibilité
  const options = [
    {
      id: 1,
      label: 'BAS DU DOS / WAIST LENGHT',
      availableDays: ['Lundi', 'Jeudi'],
    },
    {
      id: 2,
      label: 'DETANGLING BRUSH / BROSSE DEMELANTE',
      availableDays: ['Mardi', 'Samedi'],
    },
    {
      id: 3,
      label: 'BONNET EN SATIN (Large) / African print satin head cap',
      availableDays: ['Mercredi', 'Dimanche'],
    },
    {
      id: 4,
      label: 'HUILE POUSSE PLUS / ANTI-PELLICULAIRE',
      availableDays: ['Lundi', 'Vendredi'],
    },
    { id: 5, label: 'BOUTEILLE DE SPRAY', availableDays: ['Mardi', 'Jeudi'] },
    {
      id: 6,
      label: 'CREME POUSSE PLUS ENRICHIE AU MORINGA',
      availableDays: ['Samedi', 'Dimanche'],
    },
    { id: 7, label: 'NECK LENGTH', availableDays: ['Lundi', 'Samedi'] },
    {
      id: 8,
      label: 'MELANGE DE COULEURS',
      availableDays: ['Mercredi', 'Jeudi'],
    },
    { id: 9, label: 'BOHO STYLE', availableDays: ['Dimanche', 'Vendredi'] },
    {
      id: 10,
      label: 'X Pression pre streched hair 42 pouces (1b or 2)',
      availableDays: ['Lundi', 'Jeudi'],
    },
  ];

  // Fonction pour générer tous les jours de l'année à partir d'aujourd'hui
  const generateYearDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay);
    }
    return days;
  };

  // Formater les jours pour l'affichage
  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('fr-FR', options);
  };

  // Mélanger un tableau de manière aléatoire
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Gérer la sélection des options
  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, parseInt(value)]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((item) => item !== parseInt(value))
      );
    }
  };

  // Récupérer les jours de disponibilité en fonction des options sélectionnées
  const handleGetAvailability = () => {
    const availableDays = selectedOptions
      .map(
        (optionId) =>
          options.find((option) => option.id === optionId).availableDays
      )
      .flat(); // Fusionner les jours de toutes les options sélectionnées

    // Mélanger les jours de manière aléatoire
    const shuffledDays = shuffleArray(availableDays);
    setAvailability(shuffledDays);
  };

  // Filtrer les jours disponibles à partir de l'année en cours
  const filterAvailableDays = () => {
    const availableDaysList = [];
    daysOfYear.forEach((day) => {
      const formattedDate = formatDate(day);
      const dayName = new Date(day).toLocaleString('fr-FR', {
        weekday: 'long',
      });
      if (availability.includes(dayName)) {
        availableDaysList.push({
          date: formattedDate,
          dayName,
          isAvailable: true,
        });
      } else {
        availableDaysList.push({
          date: formattedDate,
          dayName,
          isAvailable: false,
        });
      }
    });
    return availableDaysList;
  };

  useEffect(() => {
    setDaysOfYear(generateYearDays());
  }, []);

  useEffect(() => {
    if (availability.length > 0) {
      setDaysOfYear(filterAvailableDays());
    }
  }, [availability]);

  // Carrousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour déplacer le carrousel vers la gauche
  const goToPrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? daysOfYear.length - 1 : currentIndex - 1
    );
  };

  // Fonction pour déplacer le carrousel vers la droite
  const goToNext = () => {
    setCurrentIndex(
      currentIndex === daysOfYear.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <RendezVous />
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center">
          Sélectionnez vos options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                value={option.id}
                onChange={handleCheckboxChange}
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="text-lg">{option.label}</label>
            </div>
          ))}
        </div>
        <button
          onClick={handleGetAvailability}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Voir Disponibilités
        </button>
      </div>

      {availability.length > 0 && (
        <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-6 rounded-lg shadow-lg mt-8 relative overflow-hidden">
          <h3 className="text-2xl font-semibold text-white text-center mb-4">
            Jours de Disponibilité
          </h3>
          <div className="flex items-center justify-center relative">
            <button
              onClick={goToPrev}
              className="absolute left-0 transform -translate-x-6 bg-teal-700 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-all">
              &lt;
            </button>
            <div className="flex space-x-4 overflow-hidden w-full">
              {daysOfYear
                .slice(currentIndex, currentIndex + 1) // Affiche une carte à la fois sur mobile
                .map((day, index) => {
                  const { date, dayName, isAvailable } = day;
                  return (
                    <div
                      key={index}
                      className={`min-w-[200px] p-5 bg-white shadow-lg rounded-lg text-center flex-shrink-0 transition-transform ${
                        isAvailable ? 'transform hover:scale-105' : 'opacity-50'
                      }`}>
                      <h4 className="text-lg font-semibold text-teal-600">
                        {dayName}
                      </h4>
                      <p className="text-sm text-gray-500">{date}</p>
                      <p className="mt-2 text-sm text-green-500">
                        {isAvailable ? 'Disponible' : 'Aucun rendez-vous'}
                      </p>
                    </div>
                  );
                })}
            </div>
            <button
              onClick={goToNext}
              className="absolute right-0 transform translate-x-6 bg-teal-700 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-all">
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service1Details1;
