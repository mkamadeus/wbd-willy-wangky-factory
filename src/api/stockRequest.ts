/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:57:57
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 12:03:35
 */

import { StockRequest, StockRequestStatus } from "@/types/stockRequest";
import { generateDummyPromise } from "./dummy";

export const getRequests = async (): Promise<StockRequest[]> => {
  return await generateDummyPromise<StockRequest[]>([
    {
      id: 1,
      chocolate_id: 1,
      amount_delivered: 30,
      amount_pending: 3,
      status: StockRequestStatus.DELIVERED,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
