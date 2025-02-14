import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutMe from "./components/about/AboutMe";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "aboutme",
    element: <AboutMe />,
  },
]);

export default router;
