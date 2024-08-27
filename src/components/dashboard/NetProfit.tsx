import { ArrowUp } from "lucide-react";

import Card from "../ui/card";
import { PieCharts } from "./PieChart";

const NetProfit = () => {
  return (
    <div>
      <Card className="p-2.5 flex justify-between">
        <div className="flex flex-col justify-between p-2">
          <h1>Net Profit</h1>
          <p className="font-extrabold text-4xl">$ 6759.25</p>
          <div className="flex text-green-500 mt-2">
            <div>
              <ArrowUp />
            </div>
            <div className="text-sm ">3%</div>
          </div>
        </div>
        <div className="w-[150px]">
          <PieCharts />
        </div>
      </Card>
    </div>
  );
};

export default NetProfit;
