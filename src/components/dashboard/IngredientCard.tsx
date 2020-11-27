import { getFactoryIngredients } from "@/api/ingredient";
import React from "react";
import { useQuery } from "react-query";
import IngredientItem from "./IngredientItem";

interface Props {}

const IngredientCard: React.FC<Props> = (props) => {
  const { data: ingredients, isLoading } = useQuery(
    "ingredients",
    getFactoryIngredients
  );

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow">
      <div className="mb-2">
        <div className="text-3xl font-bold">Ingredients</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>UUID</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {!isLoading && ingredients
            ? ingredients.map((ingredient) => {
                return (
                  <IngredientItem
                    ingredientId={ingredient.id}
                    name={ingredient.name}
                    stock={ingredient.stock}
                    uuid={ingredient.uuid}
                  />
                );
              })
            : Array(5)
                .fill(1)
                .map(() => {
                  return <IngredientItem.Lazy />;
                })}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientCard;
