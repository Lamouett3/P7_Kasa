
////////////////////////////////////////////////////////

//import { Router, Route } from "react-router-dom";

//import About from "./pages/About/About";
//import Header from "./components/Header/Header";
//import FicheLogement from "./pages/FicheLogement/FicheLogement";
//import Footer from "./components/Footer/Footer";
//import Error from "./pages/Error/Error.jsx";


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FicheLogement from './pages/FicheLogement/ficheLogement';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/ficheLogement/:id" component={FicheLogement} />
      </div>
    </Router>
  );
}

export default App





/*	Route pour fiche logement et error et a propos 
function App() {
  return (
      <div>
          <Header />
          <Home />
          <Footer />
      </div>
  );
}

export default App


              <Router>
                  <Route path="/" element={<Home />} />
              </Router>


					<Route path="/about" element={<About />} />
				  <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />   

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/ficheLogement/:id" component={FicheLogement} />
      </div>
    </Router>
  );
}

export default App


          
*/