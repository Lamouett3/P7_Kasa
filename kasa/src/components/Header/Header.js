import logo from '../../assets/images/Logo.png'
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa"/>

      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/a-propos">À propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
