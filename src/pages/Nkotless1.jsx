import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const Nkotless1 = () => {
  return (
    <div className="my-20">

    <CoiffureDetail
      image="./pic1.jpg"
      title="Nkotless Braids Medium"
      description="Les Nkotless Braids Medium sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default Nkotless1;
