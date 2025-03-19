import CoiffureDetail from '../components/CoiffureDetail'; 
const Soft3 = () => {
  return (
    <CoiffureDetail
      image="./slarge.jpg"
      title="Locs Large"
      description="Les Locs Large sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default Soft3;
