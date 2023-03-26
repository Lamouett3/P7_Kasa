import React, { useState, useEffect } from "react";
import data from "../../../public/logement.json"; // importation des données depuis le fichier JSON

function logementBanner() {
  const [activeIndex, setActiveIndex] = useState(0); // état pour stocker l'index de l'image active dans la bannière
  const [title, setTitle] = useState(""); // état pour stocker le titre de la section
  const [description, setDescription] = useState(""); // état pour stocker la description de la section
  const [equipments, setEquipments] = useState([]); // état pour stocker la liste des équipements de la section

  useEffect(() => {
    // mise à jour du titre, de la description et de la liste d'équipement en fonction de l'index de l'image active
    setTitle(data[activeIndex].title);
    setDescription(data[activeIndex].description);
    setEquipments(data[activeIndex].equipments);
  }, [activeIndex]);

  return (
    <div>
      {/* Affichage de la bannière interactive */}
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.title}
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              marginRight: "10px",
              cursor: "pointer",
              border: index === activeIndex ? "2px solid red" : "none", // bordure rouge pour l'image active
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      {/* Affichage de la section en dessous de la bannière */}
      <div style={{ marginTop: "20px" }}>
        <h2>{title}</h2>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>{description}</div>
          <div style={{ flex: 1 }}>
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default logementBanner;
