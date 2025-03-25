import { NavLink } from "react-router-dom";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="footer mt-12 bg-white py-8 px-4">

      <div className="emplacement text-center bg-white mb-8">
        <h2 className="font-semibold text-[22px] mb-4">Emplacement</h2>
        <ul className="flex justify-center gap-6 flex-wrap">
          <li>
            <NavLink
              to=""
              className="font-extrabold text-gray-800 no-underline hover:text-gray-600 transition duration-300"
              aria-label="Emplacement à Bafoussam"
            >
              Bafoussam
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-gray-800 no-underline hover:text-gray-600 transition duration-300"
              aria-label="Emplacement à Yaoundé"
            >
              Yaoundé
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-gray-800 no-underline hover:text-gray-600 transition duration-300"
              aria-label="Emplacement à Douala"
            >
              Douala
            </NavLink>
          </li>
        </ul>
      </div>

     
      <div className="hours text-center mb-8">
        <h2 className="font-semibold text-[19px] mb-4">Horaires d'ouverture</h2>
        <div className="horaires text-lg">
          <p className="mb-2">
            <span className="font-semibold">Du lundi au samedi :</span> de 9h00 à 19h00
          </p>
          <p className="mb-2">
            <span className="font-semibold">Jeudi :</span> 9h00 - 20h00
          </p>
          <p>
            <span className="font-semibold">Samedi :</span> 9h30 - 17h00
          </p>
        </div>
      </div>

      
      <div className="contact text-center mb-8">
        <h2 className="font-semibold text-[22px] mb-4">Contact</h2>
        <div className="infos">
          <h4 className="text-lg">
            <a
              href="mailto:fkamgang06@gmail.com"
              className="text-black no-underline hover:text-gray-600 transition duration-300"
              aria-label="Envoyer un email à fkamgang06@gmail.com"
            >
              fkamgang06@gmail.com
            </a>
          </h4>
          <h3 className="underline text-[19px] decoration-gray-500 mt-2">
            +237 690 46 18 30
          </h3>
          <div className="social-icons mt-4">
            <Icons />
          </div>
        </div>
      </div>

     
      <div className="footer-bottom text-center text-sm text-gray-600 mt-8">
        <p>&copy; 2025 Votre Entreprise. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
