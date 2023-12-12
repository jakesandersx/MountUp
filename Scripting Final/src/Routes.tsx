import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import App from "./App";
import Sport from "./pages/Sport";
import News from "./pages/News";
import Standings from "./pages/Standings";
import Schedule from "./pages/Schedule";
import Article from "./pages/Article";
import Error from "./pages/Error";

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "tos", element: <Terms /> } ,
      { path: "privacy", element: <Privacy /> },
      { path: "sports/:sportId", element: <Sport /> },
      { path: 'news/:sportId', element: <News />},
      { path: 'articles/:articleId', element: <Article />},
      { path: 'standings/:sportId', element: <Standings />},
      { path: 'schedule', element: <Schedule />}

    ]
  },

]);

function Routes() {
    return <RouterProvider router={router} />;
  }
  
export default Routes;