import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./dropdown.css";
//import data from "./logement.json";

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Dropdown">
      <button className="Dropdown__Button" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && (
        <p className="Dropdown__Description">{description}</p>
      )}
    </div>
  );
}

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
        <div className="Dropdowns">
          {logement.equipments && logement.equipments.map((item, index) => (
            <Dropdown key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    );
  }
  

export default FicheLogement;
