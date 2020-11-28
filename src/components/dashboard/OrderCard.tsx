import { getChocolateRequests } from "@/api/chocolateRequest";
import React from "react";
import { useQuery } from "react-query";
import OrderItem from "./OrderItem";

interface Props {}

const OrderCard: React.FC<Props> = () => {
  const { data: chocolateRequests, isLoading, refetch } = useQuery(
    "chocolateRequests",
    getChocolateRequests
  );

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow w-full h-full max-h-full">
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
        <tbody className="overflow-y-auto">
          {!isLoading && chocolateRequests
            ? chocolateRequests.map((req, i) => {
                return (
                  <OrderItem
                    {...req}
                    key={`order-item-${i}`}
                    refetch={refetch}
                  />
                );
              })
            : Array(5)
                .fill(1)
                .map((_, i) => {
                  return <OrderItem.Lazy key={`order-item-lazy-${i}`} />;
                })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderCard;
