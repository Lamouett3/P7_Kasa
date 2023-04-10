import React from 'react';
import AboutBanner from '../../components/Aboutbanner/aboutBanner';
import DropdownLarger from '../../components/dropdownLarger/dropdownLarger';
import './apropos.css';

function APropos() {
  return (
    <div className="container">
      <AboutBanner /> 
      <DropdownLarger />
    </div>
  );
}

export default APropos;
