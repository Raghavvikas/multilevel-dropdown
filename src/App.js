import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Services from "./routes/services";
import Home from "./routes/home";
import About from "./routes/about";
import WebDesign from "./routes/web-design";
import WebDev from "./routes/web-dev";
import Frontend from "./routes/frontend";
import Backend from "./routes/backend";
import ErrorPage from "./ErrorPage";
import Header from "./components/Header";

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "services",
          element: <Services />,
        },

        {
          path: "about",
          element: <About />,
        },

        {
          path: "web-design",
          element: <WebDesign />,
        },

        {
          path: "web-dev",
          element: <WebDev />,
        },

        {
          path: "frontend",
          element: <Frontend />,
        },

        {
          path: "backend",
          element: <Backend />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>
    </div>
  );
}

export default App;
