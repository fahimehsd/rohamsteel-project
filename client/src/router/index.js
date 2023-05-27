import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../roots/MainRoot";
import { Suspense } from "react";
import Loading from "../pages/loading/Loading";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";

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
      }
    ]
  },
  {
    path: "*",
    element: <Error />
  }
]);

export default router;
