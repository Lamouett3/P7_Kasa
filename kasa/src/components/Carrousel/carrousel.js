import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './carrousel.css';

function Carrousel() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../../logement.json');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };
  return (
    <div className="carrousel">
      <img src={data[currentIndex]?.cover} alt={data[currentIndex]?.title} />
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
