import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Home/Home"
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login"
import Register from "../Components/Register";
import UpcomingEvents from "../AboutEvents/UpcomingEvents";
import CreateEvent from "../AboutEvents/CreateEvent";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [{
        path: "/",
        element:<Home/>
    },
    {
      path:"/create",
      element: <CreateEvent/>
    },
    {
      path: "/upcoming",
      element: <UpcomingEvents/>
    }

  ]
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
