import React from "react";
import { createBrowserRouter } from "react-router-dom";

import PageLoading from "@/components/ui/loadings/PageLoading";
import RootLoading from "@/components/ui/loadings/RootLoading";
import Error from "@/pages/error";
import NotFound from "@/pages/notfound";

//* App
const App = React.lazy(() => import("@/App"));

//* Main
const LayoutMain = React.lazy(() => import("@/components/layouts/LayoutMain"));
const Home = React.lazy(() => import("@/pages/home"));
const Products = React.lazy(() => import("@/pages/products"));

//* Auth
const LayoutAuth = React.lazy(() => import("@/components/layouts/LayoutAuth"));
const Login = React.lazy(() => import("@/pages/auth/login"));
const Register = React.lazy(() => import("@/pages/auth/register"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<RootLoading />}>
        <App />
      </React.Suspense>
    ),
    errorElement: <Error />,
    children: [
      //* Main
      {
        path: "",
        element: (
          <React.Suspense fallback={<PageLoading />}>
            <LayoutMain />
          </React.Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <React.Suspense fallback={<PageLoading />}>
                <Home />
              </React.Suspense>
            ),
            handle: {
              crumb: "Home",
            },
          },
          {
            path: "products",
            element: (
              <React.Suspense fallback={<PageLoading />}>
                <Products />
              </React.Suspense>
            ),
            handle: {
              crumb: "Products",
            },
            loader: async () => {
              const response = await fetch("https://fakestoreapi.com/products");
              return response.json();
            },
          },
        ],
      },
      //* Auth
      {
        path: "auth",
        element: <LayoutAuth />,
        children: [
          {
            path: "login",
            element: (
              <React.Suspense fallback={<PageLoading />}>
                <Login />,
              </React.Suspense>
            ),
            handle: {
              crumb: "Login",
            },
          },

          {
            path: "register",
            element: (
              <React.Suspense fallback={<PageLoading />}>
                <Register />,
              </React.Suspense>
            ),
            handle: {
              crumb: "Register",
            },
          },
        ],
      },
      //* 404
      {
        path: "*",
        element: <NotFound />,
        handle: {
          crumb: "Not Found",
        },
      },
    ],
  },
]);

export default router;
