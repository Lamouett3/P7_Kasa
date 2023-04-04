import React, { useState, useEffect } from 'react';
import './rating.css';

function Rating({ id }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`../../logement.json`);
        const data = await response.json();
        const item = data.find((item) => item.id === id);
        const ratingValue = item.rating ? item.rating : 0;
        setRating(ratingValue);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? 'filled' : ''}>
          <i className="fas fa-star"></i>
        </span>
      ))}
    </div>
  );
}

export default Rating;
