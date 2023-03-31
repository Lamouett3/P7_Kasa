import React from 'react';
import { useParams } from 'react-router-dom';
import './ficheLogement.css'

function FicheLogement() {
  const { id } = useParams();
  
  return (
    <div className='test'>
      <p>Ca a marché 😘 { id } </p>
    </div>
  );
}

export default FicheLogement;
