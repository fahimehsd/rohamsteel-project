import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../roots/MainRoot";
import { Suspense } from "react";
import Loading from "../pages/loading/Loading";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Intro from "../pages/intro/Intro";
import Products from "../pages/products/Products";
import MainNews from "../components/news/MainNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        index: true,
        element: [
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ]
      },
      {
        path: "/intro",
        element: [
          <Suspense fallback={<Loading />}>
            <Intro />
          </Suspense>
        ]
      },
      {
        path: "/products",
        element: [
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ]
      },
      {
        path: "/news",
        element: [
          <Suspense fallback={<Loading />}>
            <MainNews />
          </Suspense>
        ]
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  }
]);

export default router;
