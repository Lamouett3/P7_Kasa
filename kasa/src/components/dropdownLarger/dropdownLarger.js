import React, { useState } from "react";
import "./dropdownLarger.css";

function DropdownLarger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown droplarge">
      <button className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        <h4>Fiabilité</h4>
      </button>
      {isOpen && (
        <div className="dropdown__content">
          <ul className="dropdown__list">
            <li className="dropdown__list-item">
              <p>Fiabilité</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownLarger;
