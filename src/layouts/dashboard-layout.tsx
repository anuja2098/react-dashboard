import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
