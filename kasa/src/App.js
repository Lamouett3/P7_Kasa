
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom"
//import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

