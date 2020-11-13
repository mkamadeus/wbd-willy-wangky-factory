/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:24
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 10:52:29
 */

import { Chocolate } from "./chocolate";
import { IngredientAmount } from "./ingredient";

export interface ChocolateRecipe {
  chocolate: Chocolate;
  ingredients: Array<IngredientAmount>;
}
