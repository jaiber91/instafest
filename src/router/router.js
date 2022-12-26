import React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router

} from "react-router-dom";
import Collections from "../pages/collections/collections";
import Home from "../pages/home/home";
import Utility from "../pages/utility/Utility";
import ListWhite from "../pages/listWhite/ListWhite"

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
    },
    {
      path:"/whitelist",
      element: <ListWhite/>
    }
  ]);
   