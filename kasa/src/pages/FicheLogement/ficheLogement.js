import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ficheLogement.css';

function FicheLogement() {
  const [logement, setLogement] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('./logement.json')
      .then(response => response.json())
      .then(data => data.find(item => item.id === id))
      .then(logement => setLogement(logement));
  }, [id]);

  return (
    <div className="fiche-logement">
      <img src={logement.cover} alt={logement.title} />
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <ul>
        {logement.equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FicheLogement
