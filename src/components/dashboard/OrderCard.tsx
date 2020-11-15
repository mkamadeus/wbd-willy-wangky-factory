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
    <div className="flex flex-col rounded bg-white p-2 shadow">
      <div className="mb-2">
        <div className="text-3xl font-bold">Orders</div>
      </div>
      {!isLoading && chocolateRequests && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Chocolate Requested</th>
              <th>Status</th>
              <th>Ordered At</th>
              <th>Amount Pending</th>
              <th>Amount Delivered</th>
              <th>Action</th>
            </tr>
          </thead>
          {chocolateRequests.map((req) => {
            return <OrderItem {...req} />;
          })}
        </table>
      )}
    </div>
  );
};

export default OrderCard;
