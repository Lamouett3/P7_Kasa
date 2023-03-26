import './Footer.css';
import LogoFooter from '../../assets/images/LogoFooter.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={LogoFooter} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
