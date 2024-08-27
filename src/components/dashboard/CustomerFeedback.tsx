import { CUSTOMER_DATA } from "@/lib/constants";
import Card from "../ui/card";
import Rating from "../ui/Rating";
// import Rating from "@/components/sharedComponents/Rating";

const CustomerFeedBack = () => {
  return (
    <div>
      <Card className="h-[450px] overflow-auto">
        <div>
          <h1 className="text-xl font-bold">Customer's Feedback</h1>
        </div>

        {CUSTOMER_DATA.map((data) => (
          <div className="p-2 mt-1">
            <h2 className="text-xl">{data.name}</h2>
            <div className="flex">
              <Rating />
            </div>
            <p className="text-gray-400 text-md">{data.review}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default CustomerFeedBack;
