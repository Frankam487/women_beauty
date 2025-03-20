import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "animate.css";

const Contact = () => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  // Configuration de React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // Fonction de soumission du formulaire
  const onSubmit = (data) => {
    // Numéro WhatsApp (remplace par ton numéro au format international sans espaces ni '+')
    const phoneNumber = "237690461830"; // Exemple : ton numéro

    // Message pré-rempli
    const whatsappMessage = encodeURIComponent(
      `Nouveau message de contact - NaturaSkin\n\nNom: ${data.name}\nMessage: ${data.message}`
    );

    // Lien WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirection vers WhatsApp
    window.open(whatsappLink, "_blank");

    // Feedback utilisateur
    setFeedbackMessage("Merci ! Votre message a été envoyé sur WhatsApp.");
    setFeedbackType("success");
    reset(); // Réinitialise le formulaire

    // Effacer le feedback après 5 secondes
    setTimeout(() => {
      setFeedbackMessage("");
      setFeedbackType("");
    }, 5000);
  };

  return (
    <div className="min-h-screen my-8 bg-gradient-to-r from-rose-50 via-rose-100 to-rose-200 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-rose-700 text-center mb-8 animate__animated animate__fadeInDown">
          Contactez-Nous
        </h2>

        {/* Feedback */}
        {feedbackMessage && (
          <div
            className={`p-4 mb-6 text-center rounded-lg animate__animated animate__fadeIn ${
              feedbackType === "success"
                ? "bg-rose-100 text-rose-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {feedbackMessage}
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-rose-600"
            >
              Votre Nom
            </label>
            <input
              id="name"
              {...register("name", { required: "Ce champ est requis" })}
              className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.name
                  ? "border-red-300 focus:ring-red-400"
                  : "border-rose-200 focus:ring-rose-400"
              }`}
              placeholder="Entrez votre nom"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-rose-600"
            >
              Votre Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Ce champ est requis" })}
              rows="5"
              className={`w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.message
                  ? "border-red-300 focus:ring-red-400"
                  : "border-rose-200 focus:ring-rose-400"
              }`}
              placeholder="Dites-nous ce que vous avez en tête"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
                isSubmitting
                  ? "bg-rose-400 text-white cursor-not-allowed"
                  : "bg-rose-600 text-white hover:bg-rose-700"
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer via WhatsApp"}
            </button>
          </div>
        </form>

        {/* Coordonnées */}
        <div className="mt-12 space-y-8">
          <h3 className="text-2xl font-semibold text-rose-700">
            Nos Coordonnées
          </h3>
          <div className="space-y-6 text-rose-600">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-rose-600 text-2xl" />
              <span className="text-lg text-gray-700">+237 690 461 830</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-rose-600 text-2xl" />
              <span className="text-lg text-gray-700">
                fkamgang06@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-rose-600 text-2xl" />
              <span className="text-lg text-gray-700">Bafoussam TPO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;