import data from '../../logement.JSON';
import './card.css';

const CardsSection = () => {
  return (
    <div className="cards-section">
      {data.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.cover} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsSection