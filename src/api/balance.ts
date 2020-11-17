/*
 * @Author: mkamadeus
 * @Date: 2020-11-16 01:03:12
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 01:25:36
 */

import { generateDummyPromise } from "./dummy";

export const getBalance = async () => {
  return await generateDummyPromise<number>(12345).then((bal) => {
    return bal;
  });
};
