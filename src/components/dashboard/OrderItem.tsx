import { Chocolate } from "@/types/chocolate";
import { ChocolateRequestStatus } from "@/types/chocolateRequest";
import React from "react";
import { useForm } from "react-hook-form";
import LazyText from "../shared/LazyText";

interface Props {
  id: number;
  status: ChocolateRequestStatus;
  createdAt: Date;
  chocolate: Partial<Chocolate>;
  amount: number;
}

const Lazy: React.FC = () => {
  return (
    <tr>
      {Array(6)
        .fill(1)
        .map(() => {
          return (
            <td className="p-1 text-center text-sm border">
              <LazyText />
            </td>
          );
        })}
    </tr>
  );
};

const OrderItem: React.FC<Props> & { Lazy: React.FC } = (props: Props) => {
  return (
    <tr>
      <td className="p-1 text-center text-sm border">#{props.id}</td>
      <td className="p-1 text-center text-sm border">{props.chocolate.name}</td>
      <td className="p-1 text-center text-sm border">
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
      <td className="p-1 text-center text-sm border">
        {props.createdAt.toDateString()}
      </td>
      <td className="p-1 text-center text-sm border">{props.amount}</td>
      <td className="p-1 text-center text-sm border">
        <button
          type="submit"
          className="w-full border border-green-600 text-green-600 rounded-full p-1 focus:outline-none transition duration-150"
        >
          Process
        </button>
      </td>
    </tr>
  );
};

OrderItem.Lazy = Lazy;

export default OrderItem;
