import React, { useState } from "react";
import "./dropdownLarger.css";

function AboutBanner() {
  const [isOpenFiabilite, setIsOpenFiabilite] = useState(false);
  const [isOpenRespect, setIsOpenRespect] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenSecurite, setIsOpenSecurite] = useState(false);

  return (
    <div>
      <div className="dropdown_droplarge">
        <button
          className="dropdownLarger__button"
          onClick={() => setIsOpenFiabilite(!isOpenFiabilite)}
        >
          <h4>Fiabilité</h4>
        </button>
        {isOpenFiabilite && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>Fiabilité</p>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="dropdown_droplarge">
        <button
          className="dropdownLarger__button"
          onClick={() => setIsOpenRespect(!isOpenRespect)}
        >
          <h4>Respect</h4>
        </button>
        {isOpenRespect && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>Respect</p>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="dropdown_droplarge">
        <button
          className="dropdownLarger__button"
          onClick={() => setIsOpenService(!isOpenService)}
        >
          <h4>Service</h4>
        </button>
        {isOpenService && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>Service</p>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="dropdown_droplarge">
        <button
          className="dropdownLarger__button"
          onClick={() => setIsOpenSecurite(!isOpenSecurite)}
        >
          <h4>Sécurité</h4>
        </button>
        {isOpenSecurite && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>Sécurité</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutBanner;
