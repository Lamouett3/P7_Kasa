//import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return <Header />
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