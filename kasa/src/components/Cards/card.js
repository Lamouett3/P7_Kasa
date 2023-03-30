import { useState, useEffect } from 'react';
import './card.css';
import { Link } from 'react-router-dom';

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
        <Link key={card.id} to={`/ficheLogement/${card.id}`}>
          <div className="card" key={card.id}>
            <img src={card.cover} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsSection;
