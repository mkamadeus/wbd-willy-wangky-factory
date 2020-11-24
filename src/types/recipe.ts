/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:24
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 16:24:33
 */

import { ChocolateBase } from "./chocolate";
import { IngredientRecipe } from "./ingredient";

export interface Recipe {
  chocolate: ChocolateBase;
  ingredients: Array<IngredientRecipe>;
}
