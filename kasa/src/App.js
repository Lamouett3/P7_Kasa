
////////////////////////////////////////////////////////

//import { Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
//import About from "./pages/About/About";
import Header from "./components/Header/Header";
//import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Footer from "./components/Footer/Footer";
//import Error from "./pages/Error/Error.jsx";

function App() {
  return (
      <div>
          <Header />
          <main>
          <Home />
          </main>
          <Footer />
      </div>
  );
}

export default App

/*	Route pour fiche logement et error et a propos 
              <Router>
                  <Route path="/" element={<Home />} />
              </Router>


					<Route path="/about" element={<About />} />
				  <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />   
*/