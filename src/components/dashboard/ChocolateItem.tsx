import React from "react";

interface Props {
  chocoId: number;
  name: string;
  stock: number;
  uuid?: string | undefined;
}

const ChocolateItem = (props: Props) => {
  return (
    <tr>
      <td className="text-center text-sm">#{props.chocoId}</td>
      <td className="text-center text-sm">{props.name}</td>
      <td className="text-center text-sm">{props.stock}</td>
    </tr>
  );
};

export default ChocolateItem;
