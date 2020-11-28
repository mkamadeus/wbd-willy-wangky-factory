import { approveChocolateRequest } from "@/api/chocolateRequest";
import { Chocolate } from "@/types/chocolate";
import { ChocolateRequestStatus } from "@/types/chocolateRequest";
import React from "react";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import LazyText from "../shared/LazyText";

interface Props {
  id: number;
  uuid?: string | undefined;
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
        .map((_, i) => {
          return (
            <td className="text-center text-sm" key={`order-lazy-text-${i}`}>
              <LazyText />
            </td>
          );
        })}
    </tr>
  );
};

const OrderItem: React.FC<Props> & { Lazy: React.FC } = (props: Props) => {
  const [mutate] = useMutation(approveChocolateRequest, { throwOnError: true });

  const approveRequest = () => {
    mutate({ uuid: props.uuid as string })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Item delivered!",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Approval error",
          text: err.message,
        });
      });
  };

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
          className={`w-full text-xs ${
            props.status === ChocolateRequestStatus.PENDING
              ? "text-green-600"
              : "text-gray-600 cursor-not-allowed"
          } underline rounded-full focus:outline-none transition duration-150`}
          onClick={() => {
            approveRequest();
          }}
          disabled={props.status !== ChocolateRequestStatus.PENDING}
        >
          Process
        </button>
      </td>
    </tr>
  );
};

OrderItem.Lazy = Lazy;

export default OrderItem;
