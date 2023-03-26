//import logo from './logo.svg';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import CardsSection from './components/Cards/card';
import './App.css';

function App() {
  return ( 
    <div>
  <Header />
  <Banner />
  <CardsSection />
    </div>
  );
}

export default App

/*
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </BrowserRouter>
  );
}
*/