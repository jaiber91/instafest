import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router

} from "react-router-dom";
import Collections from "../pages/collections/collections";
import Home from "../pages/home/home";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path:"/colecciones",
        element: <Collections/>
    }
  ]);
  