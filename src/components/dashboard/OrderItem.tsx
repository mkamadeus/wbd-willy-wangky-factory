import { Chocolate } from "@/types/chocolate";
import { ChocolateRequestStatus } from "@/types/chocolateRequest";
import React from "react";

interface Props {
  id: number;
  status: ChocolateRequestStatus;
  createdAt: Date;
  chocolate: Partial<Chocolate>;
  amountPending: number;
  amountDelivered: number;
}

const OrderItem: React.FC<Props> = (props: Props) => {
  return (
    <tr>
      <td className="p-2 text-center border">#{props.id}</td>
      <td className="p-2 text-center border">{props.chocolate.name}</td>
      <td className="p-2 text-center border">
        <div
          className={`rounded-full p-1 px-2 text-white text-sm ${
            props.status === ChocolateRequestStatus.DELIVERED
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {props.status === ChocolateRequestStatus.DELIVERED
            ? "Delivered"
            : "Pending"}
        </div>
      </td>
      <td className="p-2 text-center border">
        {props.createdAt.toDateString()}
      </td>
      <td className="p-2 text-center border">{props.amountPending}</td>
      <td className="p-2 text-center border">{props.amountDelivered}</td>
      <td className="p-2 text-center border">
        <form className="flex w-full ">
          <div className="w-full">
            <button>ssss</button>
          </div>
          <div className="w-full">rej</div>
        </form>
      </td>
    </tr>
  );
};

export default OrderItem;
