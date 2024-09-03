import App from "@/App";
import HomePage from "@/pages/Home/page";

import LoginPage from "@/pages/Login/page";
import NotFoundPage from "@/pages/NotFound/page";
import RegisterPage from "@/pages/Register/page";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // đại diện cho trang gốc của ứng dụng.
  {
    path: "/", 
    element: <App />,
    children: [
      {
        index: true,
        element:<HomePage/>
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      
    ],
  },
  // đường dẫn không tồn tại.
  {
    path:"/*",
    element : <NotFoundPage/>
  }
]);

export default router;
// Khi người dùng nhập example.com/ vào trình duyệt:
// React Router sẽ so khớp đường dẫn / và render ra component App.
// Sau đó, vì có thêm phần index: true, trang mặc định của / là LoginPage. Điều này có nghĩa là LoginPage sẽ được hiển thị bên trong App.