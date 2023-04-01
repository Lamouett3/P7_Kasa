import React from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from '../../components/dropdown/dropdown';
import './ficheLogement.css'

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
