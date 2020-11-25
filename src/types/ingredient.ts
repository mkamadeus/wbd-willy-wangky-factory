/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:08
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-25 14:19:17
 */

export interface Ingredient {
  id: number;
  name: string;
  stock: string;
  uuid?: string | undefined;
}

export interface IngredientRecipe extends Ingredient {
  amount: number;
}
