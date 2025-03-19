import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const Soft2 = () => {
  return (
    <CoiffureDetail
      image="./smedium.jpg"
      title="Locs Medium"
      description="Les Twists Courtes sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
      features={[
        'Idéales pour un entretien facile',
        'Style moderne et élégant',
        'Adaptées à tous types de cheveux',
        "Durabilité de plusieurs semaines avec peu d'entretien",
      ]}
      route="/reserver"
    />
  );
};

export default Soft2;
