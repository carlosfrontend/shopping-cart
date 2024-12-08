import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/HomePage/HomePage";
import ShopPage from "../components/Shop/ShopPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Cart from "../components/Cart/Cart";

import CategoriesPage from "../components/Categories/CategoriesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "categories/:name",
        element: <CategoriesPage />,
      },
      {
        path: "home/categories/:name",
        element: <CategoriesPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
