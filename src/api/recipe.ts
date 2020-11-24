import { generateDummyPromise } from "./dummy";
import { Recipe } from "@/types/recipe";

export const getRecipes = async (): Promise<Recipe[]> => {
  return await generateDummyPromise<Recipe[]>([
    {
      chocolate: {
        id: 1,
        name: "Cadburry",
      },
      ingredients: [
        { id: 1, name: "Vanilla", amount: 300, unit: "gr" },
        { id: 2, name: "Chocolate", amount: 300, unit: "gr" },
        { id: 1, name: "Salt", amount: 3, unit: "Piece" },
      ],
    },
    {
      chocolate: {
        id: 2,
        name: "Jun Ho Choc",
      },
      ingredients: [
        { id: 1, name: "Vanilla", amount: 300, unit: "gr" },
        { id: 2, name: "Chocolate", amount: 300, unit: "gr" },
        { id: 1, name: "Salt", amount: 3, unit: "Piece" },
      ],
    },
  ]);
};
