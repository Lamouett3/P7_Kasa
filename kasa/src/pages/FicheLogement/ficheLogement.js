import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ficheLogement.css'
import Carrousel from "../../components/Carrousel/carrousel";
import Dropdown from "../../components/dropdown/dropdown";
import Rating from "../../components/rating/rating";
import Host from "../../components/host/host";
import Tag from "../../components/Tag/tag";
import Footer from '../../components/Footer/Footer';

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
    <div>
    <div className="fiche-logement">
      <Carrousel />
      <div className="profile-section">
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>
      <Host />
      <Tag />
      <Rating />
      </div>
      <section className="dropdown__section">
      <Dropdown id={id} label="Description" property="description" />
      <Dropdown id={id} label="Equipements" property="equipments" />
      </section>
    </div>
    <Footer />
    </div>
  );
}


export default FicheLogement;


