import LeftDashboard from "@/components/dashboard/LeftDashboard";
import RightDashboard from "@/components/dashboard/RightDashboard";

const Dashboard = () => {
  return (
    <div className=" text-white bg-main-bg p-6  h-max pt-[80px]">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <div className="md:flex gap-10">
        <LeftDashboard />
        <RightDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
