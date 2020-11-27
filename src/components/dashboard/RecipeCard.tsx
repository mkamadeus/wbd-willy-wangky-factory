import { getRecipes } from "@/api/recipe";
import { Recipe } from "@/types/recipe";
import React from "react";
import { useQuery } from "react-query";
import RecipeItem from "./RecipeItem";

interface Props {}

const RecipeCard = (props: Props) => {
  const { data: recipes, isLoading } = useQuery<Recipe[]>(
    "recipes",
    getRecipes
  );

  return (
    <div className="flex flex-col rounded bg-white p-4 shadow w-full h-full max-h-full">
      <div className="mb-2">
        <div className="text-3xl font-bold relative">Recipes</div>
      </div>
      <div>
        {!isLoading && recipes
          ? recipes.map((recipe) => {
              return <RecipeItem {...recipe} />;
            })
          : Array(5)
              .fill(1)
              .map(() => {
                return <RecipeItem.Lazy />;
              })}
      </div>
    </div>
  );
};

export default RecipeCard;
