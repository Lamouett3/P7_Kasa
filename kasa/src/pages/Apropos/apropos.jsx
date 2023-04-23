import React from 'react';
import AboutBanner from '../../components/Aboutbanner/aboutBanner';
import DropdownLarger from '../../components/dropdownLarger/dropdownLarger';
import Footer from '../../components/Footer/Footer';
import './apropos.css';

function APropos() {
  return (
    <div>
    <div className="container">
      <AboutBanner /> 
      <DropdownLarger />
    </div>
    <Footer />
    </div>
  );
}

export default APropos;
