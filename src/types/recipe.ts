/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:24
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 16:24:33
 */

import { Chocolate } from "./chocolate";
import { Ingredient } from "./ingredient";

export interface ChocolateRecipe {
  chocolate: Chocolate;
  ingredients: Array<Ingredient>;
}
