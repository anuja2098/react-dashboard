// import Card from "@/components/sharedComponents/Card";
import Card from "../ui/card";
import { ActivityBar } from "./ActivityBar";

const Activity = () => {
  return (
    <div>
      <Card className="min-h-60">
        <ActivityBar />
      </Card>
    </div>
  );
};

export default Activity;
