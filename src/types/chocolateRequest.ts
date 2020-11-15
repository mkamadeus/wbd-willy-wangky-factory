/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 10:04:59
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 10:38:17
 */

import { Chocolate } from "./chocolate";

// stock_request(id, chocolateId, amountPending, amountDelivered, status, createdAt, updatedAt)

export enum ChocolateRequestStatus {
  PENDING,
  DELIVERED,
}

export interface ChocolateRequest {
  id: number;
  chocolate: Partial<Chocolate>;
  amountPending: number;
  amountDelivered: number;
  status: ChocolateRequestStatus;
  createdAt: Date;
  updatedAt: Date;
}
