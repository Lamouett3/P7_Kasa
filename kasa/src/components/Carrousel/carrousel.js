import React, { useState, useEffect } from 'react';
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
        &#8592;
      </button>
      <button className="carrousel__button carrousel__button--next" onClick={handleNextClick}>
        &#8594;
      </button>
    </div>
  );
}

export default Carrousel;
