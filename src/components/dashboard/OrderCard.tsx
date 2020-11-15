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
    <div className="flex flex-col rounded bg-white p-4 shadow">
      <div className="mb-2">
        <div className="text-3xl font-bold">Orders</div>
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
        <tbody>
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
