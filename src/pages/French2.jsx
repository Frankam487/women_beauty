import CoiffureDetail from '../components/CoiffureDetail'; // Importation du composant réutilisable

const French2 = () => {
  return (
<div className="my-20">

    <CoiffureDetail
      image="./fss2.jpg"
      title="Fulani Medium"
      description="Les Fulani Medium sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default French2;
