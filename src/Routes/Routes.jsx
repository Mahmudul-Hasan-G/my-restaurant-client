import {
  createBrowserRouter,
 } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'order/:category',
        element: <Order />
      },
      {
        path: 'login',
        element: <LogIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret /></PrivateRoute>
      }
    ]
  },
]);