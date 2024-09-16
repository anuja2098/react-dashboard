import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AuthLayout from "./layouts/auth-layout";
import DashboardLayout from "./layouts/dashboard-layout";
import LoginV2 from "./pages/loginV2";
import RegisterV2 from "./pages/registerV2";

function Router() {
  // Create the router configuration
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Navigate to={"/login"} />,
        },
        {
          path: "/login",
          element: <LoginV2 />,
        },
        {
          path: "/register",
          element: <RegisterV2 />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default Router;
