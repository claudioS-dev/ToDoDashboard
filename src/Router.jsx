import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <h1>prueba</h1>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default Router;
