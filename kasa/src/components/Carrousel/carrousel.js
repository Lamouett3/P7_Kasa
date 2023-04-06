import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './carrousel.css';
import { useParams } from "react-router-dom";

function Carrousel() {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch('../../logement.json')
      .then(response => response.json())
      .then(data => data.find(item => item.id === id))
      .then(data => setData(data));
  }, [id]);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % data.pictures.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + data.pictures.length) % data.pictures.length);
  };
  
  return (
    <div className="carrousel">
      <img src={data.pictures && data.pictures[currentIndex]} alt={data.title} />
      <button className="carrousel__button carrousel__button--prev" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="carrousel__button carrousel__button--next" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Carrousel;
