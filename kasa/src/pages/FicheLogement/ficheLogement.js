import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ficheLogement.css'
import Carrousel from "../../components/Carrousel/carrousel";

function FicheLogement() {
  const [logement, setLogement] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('../../logement.json')
      .then(response => response.json())
      .then(data => data.find(item => item.id === id))
      .then(logement => setLogement(logement));
  }, [id]);

  return (
    <div className="fiche-logement">
      <Carrousel />
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>
      <p>{logement.description}</p>
    </div>
  );
}

//      <img src={logement.cover} alt={logement.title} />



export default FicheLogement;



/*
function FicheLogement() {
  const { id } = useParams();
  
  return (
    <div className='test'>
      <p>Ca a marché 😘 { id } </p>
      <Dropdown />
    </div>
  );
}

export default FicheLogement;




//////////////// CSS
.test {
    display: flex;
    margin: auto;
    height: 100vh;
}

.test p {
    margin: auto;
    color: #ff6060;
    font-size: 100px;
}
*/