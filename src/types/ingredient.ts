/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:08
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-27 17:14:29
 */

export interface Ingredient {
  id?: number | undefined;
  name: string;
  stock: string;
  price?: number | undefined;
  uuid?: string | undefined;
}

export interface IngredientRecipe extends Ingredient {
  amount: number;
}
