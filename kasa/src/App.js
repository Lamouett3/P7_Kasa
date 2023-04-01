
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom"
//import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;

