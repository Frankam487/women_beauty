import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+237690461830";
  const message = "Salut en quoi puis-je vous aider!!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center p-2 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all"
      aria-label="Contacter via WhatsApp"
    >
      <FaWhatsapp className="w-20 h-10" />{" "}
    </a>
  );
};

export default WhatsAppButton;
