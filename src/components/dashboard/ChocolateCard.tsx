import { createChocolate, getChocolates } from "@/api/chocolate";
import React from "react";
import { useQuery } from "react-query";
import ChocolateItem from "./ChocolateItem";
import DropdownField from "../shared/DropdownField";
import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

interface Props {}

type FormData = {
  uuid: string;
  quantity: number;
};

const ChocolateCard: React.FC<Props> = (props) => {
  const { data: chocolates, isLoading } = useQuery("chocolates", getChocolates);

  const { register, handleSubmit, watch } = useForm();

  const onSubmit = async (chocolate: FormData) => {
    await createChocolate(chocolate)
      .then((response) => {
        if (response) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Chocolate has been created!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Transaction failed.",
            text: "We did an oopsie!",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Transaction failed.",
          text: "We did an oopsie!",
        });
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col rounded bg-white p-4 shadow">
      <div className="mb-2">
        <div className="text-3xl font-bold">Chocolates</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex p-2 -m-1">
          <div className="w-full p-1">
            <DropdownField
              label="Chocolates"
              options={
                chocolates
                  ? chocolates.map((choco) => choco.uuid as string)
                  : []
              }
              optionsLabel={
                chocolates ? chocolates.map((choco) => choco.name) : []
              }
              placeholder="Select the chocolate that you want to create..."
              ref={register}
              name="uuid"
            />
          </div>
          <div className="w-full p-1">
            <InputField
              label="Amount"
              type="number"
              ref={register}
              name="quantity"
            />
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded p-2"
          >
            Create Chocolate
          </button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {!isLoading && chocolates
            ? chocolates.map((choco) => {
                return (
                  <ChocolateItem
                    chocoId={choco.id}
                    name={choco.name}
                    stock={choco.stock}
                    uuid={choco.name}
                  />
                );
              })
            : Array(5)
                .fill(1)
                .map(() => {
                  return <div>s</div>;
                })}
        </tbody>
      </table>
    </div>
  );
};

export default ChocolateCard;
