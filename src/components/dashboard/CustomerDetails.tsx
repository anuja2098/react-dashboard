import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CUSTOMERS } from "@/lib/constants";
import Card from "../ui/card";

const CustomerDetails = () => {
  return (
    <div className="">
      <Card className=" flex justify-around">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Customer</TableHead>
              <TableHead className="text-white">Order No.</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-right text-white">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {CUSTOMERS.map((customer) => (
              <TableRow key={customer.customer}>
                <TableCell className="font-medium p-3 flex items-center gap-4">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={customer.image}
                  />
                  {/* <div>{customer.image}</div> */}
                  {customer.customer}
                </TableCell>
                <TableCell>{customer.orderNo}</TableCell>
                <TableCell>${customer.amount}</TableCell>

                <TableCell align="right" className="">
                  <div
                    className={`text-center inline-block w-20 p-1 rounded-lg ${
                      customer.isDelivered
                        ? "bg-green-400/30 text-green-400"
                        : "bg-red-400/30 text-red-400"
                    }`}
                  >
                    {customer.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default CustomerDetails;
