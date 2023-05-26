import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Loading from "./pages/loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: [
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ]
  },
  {
    path: "*",
    element: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
