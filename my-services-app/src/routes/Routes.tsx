import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Faq from "../pages/FAQ/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);

export default router;
