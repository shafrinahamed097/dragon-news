import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from "./layout/HomeLayout/HomeLayout.jsx";
import About from "./components/About/About.jsx";
import Career from "./components/Career/Career.jsx";
import CategoryNews from "./pages/CategoryNews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/new",
    element: <h1>Home Layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/auth",
    element: <h1>Login in</h1>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
