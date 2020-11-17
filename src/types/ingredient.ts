/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:08
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 19:41:39
 */

export interface IngredientBase {
  id: number;
  name: string;
}

export interface IngredientMeta {
  expiryDate: Date;
  stock: number;
}

export interface Ingredient extends IngredientBase, IngredientMeta {}

export interface IngredientRecipe extends IngredientBase {
  amount: number;
  unit: string;
}

export interface IngredientAllExpiry extends IngredientBase {
  list: Array<IngredientMeta>;
}
