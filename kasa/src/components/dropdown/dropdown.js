import React, { useState } from "react";
//import { useParams } from "react-router-dom";
import "./dropdown.css";
//import data from "./logement.json";

function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Dropdown">
      <button className="Dropdown__Button" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && (
        <p className="Dropdown__Description">{description}</p>
      )}
    </div>
  );
}

export default Dropdown;