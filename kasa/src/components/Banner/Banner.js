import background from '../../assets/images/Banniere.png';
import './Banner.css';


function Banner() {
  return (
    <div className="banner">
      <img className ="bannerImg" src={background} alt="Bannière"/>
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;
