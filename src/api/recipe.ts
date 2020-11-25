import { generateDummyPromise } from "./dummy";
import { Recipe } from "@/types/recipe";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { Ingredient, IngredientRecipe } from "@/types/ingredient";

export const getRecipes = async (): Promise<Recipe[]> => {
  return await axios
    .post<string>(
      `${process.env.REACT_APP_FACTORY_API_URL}/webapp/services/getAllRecipes`,
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:getAllRecipes xmlns:ns2="http://services/">
          </ns2:getAllRecipes>
      </S:Body>
  </S:Envelope>`,
      { headers: { "content-type": "text/xml" }, withCredentials: true }
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      const recipes =
        result["S:Envelope"]["S:Body"][0]["ns2:getAllRecipesResponse"][0]
          .return[0].item;
      const recipeArray: Recipe[] = [];
      console.log(recipes);
      for (let i = 0; i < recipes.length; i++) {
        const ingredients = recipes[i].ingredients;
        const ingredientArray: IngredientRecipe[] = [];

        if (ingredients) {
          for (let j = 0; j < ingredients.length; j++) {
            ingredientArray.push({
              amount: ingredients[j].amountNeeded[0],
              id: ingredients[j].ingredient[0].id[0],
              name: ingredients[j].ingredient[0].name[0],
              stock: ingredients[j].ingredient[0].availableStock[0],
              uuid: ingredients[j].ingredient[0].uuid[0],
            });
          }
        }

        recipeArray.push({
          chocolate: {
            id: recipes[i].chocolate[0].id[0],
            name: recipes[i].chocolate[0].name[0],
            stock: parseInt(recipes[i].chocolate[0].stock[0]) as number,
            uuid: recipes[i].chocolate[0].UUID[0],
          },
          ingredients: ingredientArray,
        });
      }
      return recipeArray;
    });

  // return [];
  // return await generateDummyPromise<Recipe[]>([
  //   {
  //     chocolate: {
  //       id: 1,
  //       name: "Cadburry",
  //     },
  //     ingredients: [
  //       { id: 1, name: "Vanilla", amount: 300, unit: "gr" },
  //       { id: 2, name: "Chocolate", amount: 300, unit: "gr" },
  //       { id: 1, name: "Salt", amount: 3, unit: "Piece" },
  //     ],
  //   },
  //   {
  //     chocolate: {
  //       id: 2,
  //       name: "Jun Ho Choc",
  //     },
  //     ingredients: [
  //       { id: 1, name: "Vanilla", amount: 300, unit: "gr" },
  //       { id: 2, name: "Chocolate", amount: 300, unit: "gr" },
  //       { id: 1, name: "Salt", amount: 3, unit: "Piece" },
  //     ],
  //   },
  // ]);
};
