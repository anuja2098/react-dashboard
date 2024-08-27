import CounterWidgets from "./CounterWidgets";
import { ActivityBar } from "./ActivityBar";
import CustomerDetails from "./CustomerDetails";

const LeftDashboard = () => {
  return (
    <div className=" w-full md:w-8/12 md:flex-row gap-6">
      <CounterWidgets />
      <ActivityBar />
      <CustomerDetails />
    </div>
  );
};

export default LeftDashboard;
