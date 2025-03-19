import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import List from "../components/List";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsappButton";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="home">
      <Header />
      <div className="bg-slate-100 home-content">
        <motion.h1
          className="text-center text-4xl font-bold mt-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Bienvenue
          <br />
          chez <span translate="no">house-beauty</span>
        </motion.h1>

        <div className="consignes-container px-22 w-4/5 ">

          <motion.p
            className="font-serif text-[13px] py-20 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Merci infiniment pour l’intérêt que vous portez à mes services. Afin
            de rendre votre expérience aussi simple qu’agréable, veuillez
            prendre note des informations ci-dessous:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="list-disc ml-6"
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Les prix indiqués correspondent aux tresses mi-dos. Si vous
              souhaitez des tresses plus longues, n’oubliez pas d’ajouter
              l’option correspondante à votre réservation.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Il est fortement conseillé d'acheter les mèches auprès de nous,
              afin que nous puissions les préparer et ainsi gagner du temps.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Les couleurs de mèches disponibles sont : 1B, 1, 2 et 4. Si vous
              êtes intéressé(e) par d’autres couleurs de mèches, veuillez nous
              contacter à l’avance à l'adresse courriel suivante :
              mfokamkemgne@icloud.com
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Les disponibilités pour le mois suivant s’ouvrent chaque 20 du
              mois en cours.
            </motion.li>
          </motion.ul>
          <motion.h3
            className="text-[18px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            NB:
          </motion.h3>
          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <span className="text-red-600 font-semibold px-2">1.</span>{" "}
              Veuillez également noter que tous les rendez-vous du matin
              débutent à 8h00 ou 9h00, selon votre sélection.
            </motion.li>

            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="text-red-600 px-2 font-semibold">2.</span> À
              partir de janvier 2025, les mèches seront incluses dans le prix.
            </motion.li>
          </motion.ol>

          {/* Section paiement animée au scroll */}
          <motion.div
            className="text-center p-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <i className="text-red-600 font-bold">PAIEMENT</i>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            viewport={{ once: true }}
          >
            *Un dépôt de 30 CHF (non remboursable) est requis via Interac pour
            confirmer votre rendez-vous.
          </motion.p>

          <motion.h6
            className="font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            viewport={{ once: true }}
          >
            Courriel : mfokamkemgne@icloud.com
          </motion.h6>
          <motion.h6
            className="font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            viewport={{ once: true }}
          >
            Question : House
          </motion.h6>
          <motion.h6
            className="font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            viewport={{ once: true }}
          >
            Réponse : Beauty
          </motion.h6>
          <motion.p
            className="my-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
          >
            Le solde restant devra être réglé uniquement en espèces le jour du
            rendez-vous. (Le montant du dépôt sera déduit du total final.)
          </motion.p>

          <motion.h3
            className="text-[19px] font-semibold my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            viewport={{ once: true }}
          >
            À NE PAS FAIRE :
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            viewport={{ once: true }}
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
            >
              Se présenter accompagné d’enfants ou d’amis, sauf exception
              préalable. (L’espace étant limité.)
            </motion.li>
          </motion.ul>

          <motion.h3
            className="text-[15px] font-semibold my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            viewport={{ once: true }}
          >
            À FAIRE :
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
            viewport={{ once: true }}
          >
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.7 }}
            >
              Se présenter avec des cheveux propres et bien démêlés.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              Pour des{" "}
              <span className="text-black font-semibold">knotless braids</span>,
              il est fortement recommandé de lisser (blow-dry) vos cheveux afin
              d’obtenir un résultat optimal.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.9 }}
            >
              Arriver à l’heure le jour du rendez-vous. (Tout retard de plus de
              30 minutes entraînera automatiquement l’annulation du
              rendez-vous.)
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            >
              Apporter des mèches prêtes à l’emploi (
              <span className="font-semibold">pré-étirées/pre-stretched</span>).
            </motion.li>
          </motion.ul>

          <div className="my-8">
            <motion.h4
              className="text-[16px] my-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.1 }}
              viewport={{ once: true }}
            >
              Merci de nous avoir choisis, et au plaisir de vous sublimer!
            </motion.h4>
            <motion.h4
              className="text-[16px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.2 }}
              viewport={{ once: true }}
            >
              À bientôt :)
            </motion.h4>
          </div>
          <List />
          <button className="btn-services items-center flex justify-center p-2   my-12 mx-auto">
            <NavLink
              to="/services"
              className="text-white no-underline font-serif bg-gray-900 px-6 py-2 cursor-pointer transition"
            >
              {" "}
              Voir Les autres services
            </NavLink>
          </button>
          <WhatsAppButton />
        </div>
      </div>
      <Footer />
      <h2 className="author mx-auto flex items-center justify-center">
        <span>👌</span>
        <div className="name">Frank Kamgang✌✌</div>
      </h2>
    </div>
  );
};

export default Home;
