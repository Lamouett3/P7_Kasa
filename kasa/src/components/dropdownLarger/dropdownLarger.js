import React, { useState } from "react";
import "./dropdownLarger.css";
import aboutData from "./aboutText";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function AboutBanner() {
  const [isOpenFiabilite, setIsOpenFiabilite] = useState(false);
  const [isOpenRespect, setIsOpenRespect] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenSecurite, setIsOpenSecurite] = useState(false);

  return (
    <div className="container_dropdownLarge">
      <div className="dropdown_droplarge">
        <button
          className="dropdownLarger__button"
          onClick={() => setIsOpenFiabilite(!isOpenFiabilite)}
        >
          <h4>Fiabilité</h4>
          <span className="dropdownLarge__icon">
            <FontAwesomeIcon icon={isOpenFiabilite ? faChevronUp : faChevronDown} />
          </span>
        </button>
        {isOpenFiabilite && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>{aboutData.fiability}</p>
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
          <span className="dropdownLarge__icon">
            <FontAwesomeIcon icon={isOpenRespect ? faChevronUp : faChevronDown} />
          </span>
        </button>
        {isOpenRespect && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>{aboutData.respect}</p>
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
          <span className="dropdownLarge__icon">
            <FontAwesomeIcon icon={isOpenService ? faChevronUp : faChevronDown} />
          </span>
        </button>
        {isOpenService && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>{aboutData.service}</p>
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
          <span className="dropdownLarge__icon">
            <FontAwesomeIcon icon={isOpenSecurite ? faChevronUp : faChevronDown} />
          </span>
        </button>
        {isOpenSecurite && (
          <div className="dropdownLarger__content">
            <ul className="dropdownLarger__list">
              <li className="dropdownLarger__list-item">
                <p>{aboutData.security}</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutBanner;
