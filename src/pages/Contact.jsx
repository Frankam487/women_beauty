import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import "animate.css";

const Contact = () => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [isHovered, setIsHovered] = useState(null);

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

  const onSubmit = (data) => {
    const phoneNumber = "237690461830";
    const whatsappMessage = encodeURIComponent(
      `Nouveau message de contact - NaturaSkin\n\nNom: ${data.name}\nMessage: ${data.message}`
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");

    setFeedbackMessage("Message envoyé avec succès sur WhatsApp !");
    setFeedbackType("success");
    reset();

    setTimeout(() => {
      setFeedbackMessage("");
      setFeedbackType("");
    }, 5000);
  };

  // Variants pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200 flex items-center justify-center py-16 px-4 overflow-hidden relative">
      {/* Particules décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-rose-300 rounded-full opacity-30 animate-[float_6s_infinite_ease-in-out]"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-rose-400 rounded-full opacity-30 animate-[float_8s_infinite_ease-in-out]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-8 z-10"
      >
        {/* Titre avec effet de survol */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-rose-700 text-center mb-12 tracking-tight"
          whileHover={{ scale: 1.05, color: "#e11d48" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contactez-Nous
        </motion.h2>

        {/* Feedback */}
        <AnimatePresence>
          {feedbackMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`p-4 mb-8 text-center rounded-lg shadow-lg ${
                feedbackType === "success"
                  ? "bg-rose-100 text-rose-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {feedbackMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0"
        >
          {/* Champ Nom */}
          <motion.div variants={itemVariants} className="relative group">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-rose-600 mb-2 transition-colors duration-300 group-hover:text-rose-800"
            >
              Votre Nom
            </label>
            <motion.input
              id="name"
              {...register("name", { required: "Ce champ est requis" })}
              className={`w-full p-4 border-2 rounded-xl bg-rose-50/70 shadow-md focus:outline-none focus:ring-4 transition-all duration-300 ${
                errors.name
                  ? "border-red-400 focus:ring-red-300"
                  : "border-rose-200 group-hover:border-rose-400"
              }`}
              placeholder="Entrez votre nom"
              aria-invalid={errors.name ? "true" : "false"}
              whileFocus={{ scale: 1.02, borderColor: "#f43f5e" }}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="mt-2 text-red-600 text-sm"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Champ Message */}
          <motion.div
            variants={itemVariants}
            className="relative group md:col-span-2"
          >
            <label
              htmlFor="message"
              className="block text-lg font-medium text-rose-600 mb-2 transition-colors duration-300 group-hover:text-rose-800"
            >
              Votre Message
            </label>
            <motion.textarea
              id="message"
              {...register("message", { required: "Ce champ est requis" })}
              rows="5"
              className={`w-full p-4 border-2 rounded-xl bg-rose-50/70 shadow-md focus:outline-none focus:ring-4 transition-all duration-300 ${
                errors.message
                  ? "border-red-400 focus:ring-red-300"
                  : "border-rose-200 group-hover:border-rose-400"
              }`}
              placeholder="Dites-nous tout..."
              aria-invalid={errors.message ? "true" : "false"}
              whileFocus={{ scale: 1.02, borderColor: "#f43f5e" }}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="mt-2 text-red-600 text-sm"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bouton */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:col-span-2"
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`relative px-10 py-4 bg-rose-600 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              whileHover={!isSubmitting && { scale: 1.1, rotate: 2 }}
              whileTap={!isSubmitting && { scale: 0.95 }}
            >
              <span className="flex items-center">
                {isSubmitting ? (
                  "Envoi..."
                ) : (
                  <>
                    Envoyer <FaPaperPlane className="ml-2 text-xl" />
                  </>
                )}
              </span>
              <motion.span
                className="absolute inset-0 bg-rose-500 rounded-xl opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </form>

        {/* Coordonnées */}
        <motion.div variants={itemVariants} className="mt-16 space-y-10">
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-rose-700 text-center"
            whileHover={{ scale: 1.05, color: "#e11d48" }}
          >
            Restez Connecté
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaPhoneAlt className="text-rose-600 text-3xl" />,
                text: "+237 690 461 830",
              },
              {
                icon: <FaEnvelope className="text-rose-600 text-3xl" />,
                text: "fkamgang06@gmail.com",
              },
              {
                icon: <FaMapMarkerAlt className="text-rose-600 text-3xl" />,
                text: "Bafoussam TPO",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-rose-50 rounded-xl shadow-md cursor-pointer"
                whileHover={{ scale: 1.1, y: -5, boxShadow: "0 10px 20px rgba(244, 63, 94, 0.2)" }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.div
                  className="relative"
                  animate={isHovered === index ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                  <motion.span
                    className="absolute inset-0 bg-rose-300 rounded-full opacity-0"
                    animate={isHovered === index ? { opacity: 0.3, scale: 1.5 } : { opacity: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
                <span className="text-lg text-gray-700 font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animation personnalisée pour Tailwind */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Contact;