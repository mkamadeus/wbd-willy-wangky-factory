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
            <td className="text-center text-sm">
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
      <td className="text-center text-sm">#{props.id}</td>
      <td className="text-center text-sm">{props.chocolate.name}</td>
      <td className="text-center text-sm">
        <div className="flex justify-center items-center w-full h-full">
          <div
            className={`rounded-full px-2 text-white text-xs ${
              props.status === ChocolateRequestStatus.DELIVERED
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {props.status === ChocolateRequestStatus.DELIVERED
              ? "Delivered"
              : "Pending"}
          </div>
        </div>
      </td>
      <td className="text-center text-sm">{props.createdAt.toDateString()}</td>
      <td className="text-center text-sm">{props.amount}</td>
      <td className="text-center text-sm">
        <button
          type="submit"
          className="w-full text-xs text-green-600 underline rounded-full focus:outline-none transition duration-150"
        >
          Process
        </button>
      </td>
    </tr>
  );
};

OrderItem.Lazy = Lazy;

export default OrderItem;
