/*
 * @Author: mkamadeus 
 * @Date: 2020-11-13 10:05:08 
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 10:50:40
 */

export interface Ingredient {
  id: number;
  name: string;
  stock: number;
  expiry_date: string;
}

export interface IngredientAmount {
  ingredient: Ingredient;
  amount: number;
} 