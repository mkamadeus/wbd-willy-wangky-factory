/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:54:13
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 14:19:18
 */

import { Chocolate } from "@/types/chocolate";
import { generateDummyPromise } from "./dummy";

export const getChocolates = async (): Promise<Chocolate[]> => {
  return await generateDummyPromise<Chocolate[]>([
    {
      id: 1,
      name: "Cadbury",
      stock: 3,
    },
  ]);
};

export const getChocolateById = async (): Promise<Chocolate> => {
  return await generateDummyPromise<Chocolate>({
    id: 1,
    name: "Cadbury",
    stock: 3,
  });
};

export const createChocolate = () => {
  //
};

export const updateChocolate = () => {
  //
};

export const deleteChocolate = () => {
  //
};
