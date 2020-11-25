/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:08
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-25 11:12:18
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
  stock: number;
  amount: number;
  uuid?: string | undefined;
}

export interface IngredientAllExpiry extends IngredientBase {
  list: Array<IngredientMeta>;
}
