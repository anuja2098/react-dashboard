import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex gap-4 justify-center items-center h-screen ">
      <div className="w-full px-6 sm:w-96 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
