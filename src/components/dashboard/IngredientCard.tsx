import { getIngredients } from "@/api/ingredient";
import React from "react";
import { useQuery } from "react-query";
import IngredientItem from "./IngredientItem";

interface Props {}

const IngredientCard: React.FC<Props> = (props) => {
  const { data: ingredients, isLoading } = useQuery(
    "ingredients",
    getIngredients
  );

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow">
      <div className="mb-2">
        <div className="text-3xl font-bold">Ingredients</div>
      </div>
      {!isLoading && ingredients
        ? ingredients.map((ingredient) => {
            return (
              <IngredientItem
                ingredientId={ingredient.id}
                name={ingredient.name}
              />
            );
          })
        : Array(5)
            .fill(1)
            .map(() => {
              return <IngredientItem.Lazy />;
            })}
    </div>
  );
};

export default IngredientCard;
