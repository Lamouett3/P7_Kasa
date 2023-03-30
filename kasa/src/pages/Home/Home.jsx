//import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import CardsSection from '../../components/Cards/card';
//import Footer from '../../components/Footer/Footer';
//import './App.css'; // css pour animation logo react

function Home() {
  return ( 
    <main>
      <figure>
        <Banner />
      </figure>
      <section>
        <CardsSection />
      </section>
    </main>
  );
}

export default Home