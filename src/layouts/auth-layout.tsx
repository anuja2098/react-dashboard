import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("accesToken");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  });

  const backgroundImage =
    location.pathname === "/login"
      ? "bg-custom-login-image"
      : "bg-white text-black";

  return (
    <div
      className={`flex gap-4 justify-center items-center h-screen w-screen ${backgroundImage} bg-cover bg-center `}
    >
      <div className="w-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
