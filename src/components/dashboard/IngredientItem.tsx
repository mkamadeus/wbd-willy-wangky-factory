import React, { useState } from "react";
import LazyText from "../shared/LazyText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  ingredientId?: number;
  name?: string;
  stock?: number;
  uuid?: string;
}

const Lazy: React.FC = () => {
  return (
    <div className="w-full p-1">
      <LazyText />
    </div>
  );
};

const IngredientItem: React.FC<Props> & { Lazy: React.FC } = (props) => {
  return (
    <tr>
      <td className="text-sm text-center">#{props.ingredientId}</td>
      <td className="text-sm text-center">{props.name}</td>
      <td className="text-sm text-center">{props.stock}</td>
      <td className="text-sm text-center">{props.uuid}</td>
    </tr>
  );
};

IngredientItem.Lazy = Lazy;

export default IngredientItem;
