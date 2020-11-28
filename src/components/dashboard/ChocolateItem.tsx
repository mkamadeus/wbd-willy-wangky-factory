import React from "react";
import Swal from "sweetalert2";
import { useMutation } from "react-query";
import { addChocolateStock } from "@/api/chocolateStock";

interface Props {
  chocoId: number;
  name: string;
  stock: number;
  uuid?: string | undefined;
}

const ChocolateItem = (props: Props) => {
  const [mutate] = useMutation(addChocolateStock, { throwOnError: true });

  const addStock = () => {
    mutate({ uuid: props.uuid as string })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Chocolate made!",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Chocolate making error",
          text: err.message,
        });
      });
  };

  return (
    <tr>
      <td className="text-center text-sm">#{props.chocoId}</td>
      <td className="text-center text-sm">{props.name}</td>
      <td className="text-center text-sm">{props.stock}</td>
      <td className="text-center text-sm">
        <button
          className="text-green-600 underline rounded-full focus:outline-none transition duration-150"
          onClick={() => {
            addStock();
          }}
        >
          Make
        </button>
      </td>
    </tr>
  );
};

export default ChocolateItem;
