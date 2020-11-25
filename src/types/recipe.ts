/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:24
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-25 10:59:06
 */

import { Chocolate } from "./chocolate";
import { IngredientRecipe } from "./ingredient";

export interface Recipe {
  chocolate: Chocolate;
  ingredients: Array<IngredientRecipe>;
}
