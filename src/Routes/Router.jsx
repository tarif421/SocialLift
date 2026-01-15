import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home"
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login"
import Register from "../Components/Register";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [{
        path: "/",
        element: <Home/>
    }]
  },
   {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
    ],
  },
]);
