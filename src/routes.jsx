import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: 'home',
      //   element: <Home />,
      // },
      // {
      //   path: 'about',
      //   element: <About />,
      // },
    ],
  },
]);

export default router;
