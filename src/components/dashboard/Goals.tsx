// import Card from "@/components/sharedComponents/Card";
import { ChevronRight } from "lucide-react";
import Card from "../ui/card";
import { ITEMS } from "@/lib/constants";

const Goals = () => {
  return (
    <div>
      <Card className="min-h-60">
        {ITEMS.map((item) => (
          <div className="flex gap-5 p-2 items-center">
            <div className={`p-4 rounded-full bg-${item.color}/50`}>
              <item.icon className={`size={30} text-${item.color}`} />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="text-xl">{item.title}</div>
              <div className="bg-gray-500 p-0.5 rounded-full">
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Goals;
