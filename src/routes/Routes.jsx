import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AllToys from "../pages/AllToys";
import AddToy from "../pages/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../pages/MyToys";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },

      // private route 
      {
        path: "/add-toy",
        element: <PrivateRoutes><AddToy /></PrivateRoutes>,
      },
      {
        path: "/my-toys",
        element: <PrivateRoutes><MyToys /></PrivateRoutes>,
      },
    ],
  },
]);
export default router;
