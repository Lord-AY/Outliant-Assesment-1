import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Layout from "@/pages/layout";
import Product from "@/pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <>About</>,
      },
      {
        path: "services",
        element: <>Services</>,
      },
      {
        path: "products",
        element: <Product />,
      },
    ],
  },
]);
