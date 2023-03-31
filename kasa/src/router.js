import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home/Home";
import FicheLogement from "./pages/FicheLogement/ficheLogement";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <FicheLogement />,
        path:"/logement/:id",
        // loader: logementsData.id,
      },

    ],
  },
])

export default router