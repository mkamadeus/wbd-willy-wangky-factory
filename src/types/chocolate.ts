/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:05:26
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 11:58:29
 */

export interface ChocolateBase {
  id: number;
  name: string;
}

export interface Chocolate extends ChocolateBase {
  stock: number;
}
