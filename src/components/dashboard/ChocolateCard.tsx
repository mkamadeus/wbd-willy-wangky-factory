import { getChocolates } from "@/api/chocolate";
import React from "react";
import { useQuery } from "react-query";
import ChocolateItem from "./ChocolateItem";

interface Props {}

const ChocolateCard: React.FC<Props> = (props) => {
  const { data: chocolates, isLoading } = useQuery("chocolates", getChocolates);

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow">
      <div className="mb-2">
        <div className="text-3xl font-bold">Chocolates</div>
      </div>
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
