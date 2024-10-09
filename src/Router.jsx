import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <h1>Prueba</h1>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
