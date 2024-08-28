import CustomerFeedBack from "./CustomerFeedback";
import Goals from "./Goals";
import NetProfit from "./NetProfit";

const RightDashboard = () => {
  return (
    <div className="w-full md:w-4/12 flex flex-col gap-6 mt-2">
      <NetProfit />
      <Goals />
      <CustomerFeedBack />
    </div>
  );
};

export default RightDashboard;
