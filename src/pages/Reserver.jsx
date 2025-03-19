import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

// Fonction pour générer les dates disponibles du mois avec un écart de 2 heures
const generateDatesForWeek = (currentDate) => {
  const dates = [];
  const startDate = new Date(currentDate); // Date actuelle
  startDate.setHours(8, 0, 0, 0); // Fixe l'heure à 8h du matin du jour actuel

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 7); // Génère les dates pour la semaine suivante

  // Nous n'ajoutons que les créneaux de matinée (8h) et de midi (12h)
  while (startDate <= endDate) {
    // Exclure les dates passées
    if (startDate < new Date()) {
      startDate.setDate(startDate.getDate() + 1); // Passe à la journée suivante
      continue;
    }

    const dateObj = new Date(startDate);
    const morningSlot = new Date(
      dateObj.getFullYear(),
      dateObj.getMonth(),
      dateObj.getDate(),
      8,
      0,
      0,
      0
    );
    // Période de midi (12h)
    const noonSlot = new Date(
      dateObj.getFullYear(),
      dateObj.getMonth(),
      dateObj.getDate(),
      12,
      0,
      0,
      0
    );

    // Ajouter les créneaux horaires
    dates.push(morningSlot);
    dates.push(noonSlot);

    // Passe à la journée suivante
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
};

// Composant principal de réservation
const Reserver = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableDates, setAvailableDates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    // Générer les créneaux horaires à partir de la date actuelle
    const currentDate = new Date(); // Récupère la date actuelle
    const dates = generateDatesForWeek(currentDate);
    setAvailableDates(dates);
    setLoading(false);
  }, []);

  const handleDateSelection = (date) => {
    const currentDate = new Date();
    const dateDiff = date.getTime() - currentDate.getTime();
    const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 jours en millisecondes

    // Vérifie si la date est dans le passé ou au-delà de 7 jours
    if (dateDiff < 0 || dateDiff > sevenDaysInMilliseconds) {
      return; // Ne rien faire si la date est invalide
    }

    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (!customerName || !customerEmail || !selectedDate) {
      setError("Tous les champs sont obligatoires !");
      return;
    }

    // Simuler l'envoi de la réservation par email
    const subject = `Réservation Salon de Coiffure - ${selectedDate.toLocaleDateString()}`;
    const body = `Bonjour, je souhaite réserver pour la date suivante : ${selectedDate.toLocaleDateString()} à ${selectedDate.toLocaleTimeString()}.\nNom : ${customerName}\nEmail : ${customerEmail}`;
    window.location.href = `mailto:contact@saloncoiffure.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Réinitialiser le formulaire
    setCustomerName("");
    setCustomerEmail("");
    setSelectedDate(null);
    setError(null);
  };

  const formatDay = (date) => {
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("fr-FR", options).format(date);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Paramètres du carrousel Slick
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1.5,
    focusOnSelect: true,
    arrows: true,
    nextArrow: (
      <div className="slick-arrow slick-next">
        <span className="text-teal-600 text-xl p-4 rounded-full bg-white shadow-2xl hover:bg-teal-100 transition-all">

        </span>
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev">
        <span className="text-teal-600 text-xl p-4 rounded-full bg-white shadow-2xl hover:bg-teal-100 transition-all">

        </span>
      </div>
    ),
  };

  return (
    <div className="min-h-screen my-20 flex overflow-x-hidden flex-col items-center bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 p-6 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-700 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Réservez votre Rendez-vous au Salon de Coiffure
        </h1>
        <p className="text-xl text-teal-600 font-medium animate__animated animate__fadeIn animate__delay-1s">
          Choisissez la date et l'heure qui vous conviennent et réservez en
          ligne facilement.
        </p>
      </header>

      {/* Indicateur de chargement */}
      {loading && (
        <div className="text-center text-teal-600 text-xl animate__animated animate__fadeIn">
          Chargement des créneaux disponibles...
        </div>
      )}

      {/* Carrousel de dates */}
      {!loading && (
        <Slider {...settings} className="w-full max-w-full mb-12">
          {availableDates.map((date, index) => {
            const currentDate = new Date();
            const dateDiff = date.getTime() - currentDate.getTime();
            const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;

            // Vérifie si la date est dans le passé ou au-delà de 7 jours
            const isDateDisabled =
              dateDiff < 0 || dateDiff > sevenDaysInMilliseconds;

            return (
              <div key={index}  className="flex justify-center">
                <div
                  onClick={() => handleDateSelection(date)}
                  className={`cursor-pointer p-8 w-full max-w-xs lg:max-w-sm bg-gradient-to-r
                    ${selectedDate && selectedDate.getTime() === date.getTime() ? "from-teal-500 to-teal-700 text-white" : "from-gray-300 to-gray-500 text-gray-700"}
                    ${isDateDisabled ? "bg-gray-400 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg hover:opacity-90"}
                    rounded-lg shadow-2xl transform transition-all text-center flex flex-col justify-center items-center animate__animated animate__bounceIn`}
                  role="button"
                  aria-label={`Sélectionner la date ${date.toLocaleDateString()}`}
                  style={isDateDisabled ? { pointerEvents: "none" } : {}}
                >
                  <p className="text-lg md:text-xl font-semibold">
                    {formatDay(date)}
                  </p>
                  <p className="text-md md:text-lg font-semibold">
                    {date.toLocaleDateString()}
                  </p>
                  <p className="text-sm md:text-md mt-2">{formatTime(date)}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      )}

      {/* Formulaire de réservation */}
      <div className="mt-8 w-full max-w-md">
        <input
          type="text"
          className="w-full p-4 mb-4 border border-teal-300 rounded-lg"
          placeholder="Votre Nom"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="email"
          className="w-full p-4 mb-4 border border-teal-300 rounded-lg"
          placeholder="Votre Email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
      </div>

      {/* Message d'erreur */}
      {error && (
        <div className="mt-4 text-red-600 text-center font-semibold">
          {error}
        </div>
      )}

      {/* Bouton de soumission */}
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className={`px-8 py-4 text-white font-semibold rounded-lg shadow-lg
            ${selectedDate ? "bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105" : "bg-gray-400 cursor-not-allowed"}
            transform transition-all`}
          disabled={!selectedDate}
          aria-disabled={!selectedDate}
        >
          Finaliser la Réservation
        </button>
      </div>

      {/* Affichage de la sélection */}
      {selectedDate && (
        <div className="mt-6 text-center text-xl font-semibold text-teal-600 animate__animated animate__fadeIn animate__delay-3s">
          <p>
            Vous avez sélectionné le {selectedDate.toLocaleDateString()} à{" "}
            {selectedDate.toLocaleTimeString()}.
          </p>
        </div>
      )}

      <footer className="w-full bg-teal-800 text-white py-6 mt-12">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-xl mb-4">Salon de Coiffure</p>
          <p className="text-md mb-2">📍 Adresse : 6423 Schwyz</p>
          <p className="text-md mb-2">📞 Téléphone : 690461830</p>
          <p className="text-md mb-2">✉️ Email : mfokamkemgne@icloud.com </p>
          
          <p className="text-sm">
            Heures d'ouverture : 9h - 19h, Lundi au Vendredi
          </p>
          <p className="text-sm mt-4">
            © 2025 Salon de Coiffure. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Reserver;
