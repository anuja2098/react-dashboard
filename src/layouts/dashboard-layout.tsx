import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("accessToken");
    if (!isLoggedIn) {
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  });

  return (
    <div>
      <Header />
      <div className="pl-20">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
