/*
 * @Author: mkamadeus 
 * @Date: 2020-11-13 10:04:59 
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 10:38:17
 */

import { Chocolate } from "./chocolate";

// stock_request(id, chocolate_id, amount_pending, amount_delivered, status, created_at, updated_at)

export enum StockRequestStatus {
  PENDING,
  DELIVERED
}

export interface StockRequest {
  id: number;
  chocolate_id: number;
  amount_pending: number;
  amount_delivered: number;
  status: StockRequestStatus;
  created_at: Date;
  updated_at: Date;
}