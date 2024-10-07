import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <h1>Hola Mundo</h1>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default Router;
