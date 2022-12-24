import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router

} from "react-router-dom";
import Collections from "../pages/collections/Collections";
import Home from "../pages/home/Home";
import Utility from "../pages/utility/Utility";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path:"/colecciones",
        element: <Collections/>
    },
    {
        path:"/utility",
        element: <Utility/>
    }
  ]);
   