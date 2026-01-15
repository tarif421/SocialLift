import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [{
        path: "/",
        element: <Home/>
    }]
  },
]);
