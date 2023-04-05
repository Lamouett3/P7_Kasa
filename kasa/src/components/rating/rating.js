import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './rating.css';

function Rating() {
    const [rating, setRating] = useState(0);
    const { id } = useParams();
  
    useEffect(() => {
        fetch('../../logement.json')
          .then(response => response.json())
          .then(data => data.find(item => item.id === id))
          .then(data => setRating(data.rating));
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
