import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  });

  return (
    <div className="flex gap-4 justify-center items-center h-screen ">
      <div className="w-full px-6 sm:w-96 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
