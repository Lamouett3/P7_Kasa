import background from '../../assets/images/aboutbanner.png';
import './aboutBanner.css';

function AboutBanner() {
  return (
    <div className="banner">
      <img className ="bannerImg" src={background} alt="A Propos Bannière"/>
    </div>
  );
};

export default AboutBanner;
