import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AyakubInfo from "../Pages/AyakubInfo";
import Home from "../Pages/Home/Home";
import HossainInfo from "../Pages/HossainInfo";
import Shohel from "../Pages/Shohel";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ayakub",
          element: <AyakubInfo />,
        },
        {
          path: "/hossain",
          element: <HossainInfo />,
        },
        {
          path: "/shohel",
          element: <Shohel />,
        },
      ],
    },
  ]);