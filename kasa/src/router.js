import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home/Home";
import FicheLogement from "./pages/FicheLogement/ficheLogement";
import Error from "./pages/Error/error";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        element: <FicheLogement />,
        path:"/logement/:id",
        params: { id: ':id' },
      },
      { path: "*", element: <Error /> },
    ],
  },
])

export default router