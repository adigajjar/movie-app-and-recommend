import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import Filter from "./pages/Filter";
import MoviePage from "./pages/MoviePage";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:title",
        element: <MoviePage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
