import React, { useState, useEffect } from "react";

import "./dropdown.css";

function Dropdown({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const response = await fetch(`../../logement.json`);
        const data = await response.json();
        const equipments = data.find((item) => item.id === id).equipments;
        setEquipments(equipments);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEquipments();
  }, [id]);

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        Equipements
      </button>
      {isOpen && (
        <div className="dropdown__content">
          <ul className="dropdown__list">
            {equipments.map((equipment, index) => (
              <li key={index} className="dropdown__list-item">
                {equipment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
