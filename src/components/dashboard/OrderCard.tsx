import { getChocolateRequests } from "@/api/chocolateRequest";
import React from "react";
import { useQuery } from "react-query";
import OrderItem from "./OrderItem";

interface Props {}

const OrderCard: React.FC<Props> = (props) => {
  const { data: chocolateRequests, isLoading } = useQuery(
    "chocolateRequests",
    getChocolateRequests
  );

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow w-full h-full max-h-full">
      <div className="mb-2">
        <div className="text-3xl font-bold relative">
          Orders
          <div
            className="absolute bottom-0 bg-gradient-to-r from-teal-400 to-blue-500"
            style={{ width: 200, height: 6, left: 20 }}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Chocolate Requested</th>
            <th>Status</th>
            <th>Ordered At</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {!isLoading && chocolateRequests
            ? chocolateRequests.map((req) => {
                return <OrderItem {...req} />;
              })
            : Array(5)
                .fill(1)
                .map(() => {
                  return <OrderItem.Lazy />;
                })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderCard;
