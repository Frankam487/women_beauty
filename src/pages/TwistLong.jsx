import CoiffureDetail from '../components/CoiffureDetail';

const TwistLong = () => {
  return (
    <div className="my-20">

    <CoiffureDetail
      image="./tlarge.jpg"
      title="Twists Large"
      description="Les Twists Large sont parfaites pour un look moderne et élégant, tout en étant faciles à entretenir."
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

export default TwistLong;
