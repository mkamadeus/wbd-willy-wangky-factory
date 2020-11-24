/*
 * @Author: mkamadeus
 * @Date: 2020-11-16 13:39:09
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 17:29:31
 */

import { IngredientAllExpiry } from "@/types/ingredient";
import { generateDummyPromise } from "./dummy";

export const getIngredients = async () => {
  return await generateDummyPromise<IngredientAllExpiry[]>([
    {
      id: 1,
      name: "Cinammon",
      list: [
        {
          stock: 3,
          expiryDate: new Date(),
        },
        {
          stock: 5,
          expiryDate: new Date(),
        },
        {
          stock: 1000,
          expiryDate: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: "Vanilla",
      list: [
        {
          stock: 5,
          expiryDate: new Date(),
        },
        {
          stock: 1000,
          expiryDate: new Date(),
        },
      ],
    },
    {
      id: 3,
      name: "Banana Powder",
      list: [
        {
          stock: 1000,
          expiryDate: new Date(),
        },
      ],
    },
  ]).then((ingredientsArray) => {
    return ingredientsArray;
  });
};
