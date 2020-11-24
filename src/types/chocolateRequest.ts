/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:04:59
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 00:14:40
 */

import { Chocolate } from "./chocolate";

// stock_request(id, chocolateId, amount, status, createdAt, updatedAt)

export enum ChocolateRequestStatus {
  PENDING,
  DELIVERED,
}

export interface ChocolateRequest {
  id: number;
  uuid?: string | undefined;
  chocolate: Partial<Chocolate>;
  amount: number;
  status: ChocolateRequestStatus;
  createdAt: Date;
  updatedAt: Date;
}
