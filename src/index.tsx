import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {BuildPage} from "./pages/BuildPage/BuildPage.tsx";
import {MainPage} from "./pages/MainPage/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/build",
    element: <BuildPage />,
  }
]);

// biome-ignore lint/style/noNonNullAssertion: root element is always present
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
