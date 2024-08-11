import App from "@/App";

import LoginPage from "@/pages/Login/page";
import NotFoundPage from "@/pages/NotFound/page";
import RegisterPage from "@/pages/Register/page";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element:<LoginPage/>
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path:"/*",
    element : <NotFoundPage/>
  }
]);

export default router;
