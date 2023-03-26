import { useState, useEffect } from 'react';
import './card.css';

function CardsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./logement.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="cards-section">
      {data.map(card => (
        <div className="card" key={card.id}>
          <img src={card.cover} alt={card.title} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
