import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const French4 = () => {
  return (
    <div className="my-20">

    <CoiffureDetail
      image="./homme.jpg"
      title="Twists Classique"
      description="Les Twists Courtes sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
      features={[
        'Idéales pour un entretien facile',
        'Style moderne et élégant',
        'Adaptées à tous types de cheveux',
        "Durabilité de plusieurs semaines avec peu d'entretien",
      ]}
      route="/reserver"
    />
    </div>
  );
};

export default French4;
