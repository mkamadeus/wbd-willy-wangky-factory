/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:57:57
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 12:03:35
 */

import {
  ChocolateRequest,
  ChocolateRequestStatus,
} from "@/types/chocolateRequest";
import { generateDummyPromise } from "./dummy";

export const getChocolateRequests = async (): Promise<ChocolateRequest[]> => {
  return await generateDummyPromise<ChocolateRequest[]>([
    {
      id: 1,
      chocolate: {
        id: 1,
        name: "Pisang",
      },
      amountDelivered: 30,
      amountPending: 3,
      status: ChocolateRequestStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      chocolate: {
        id: 1,
        name: "Pisang",
      },
      amountDelivered: 30,
      amountPending: 3,
      status: ChocolateRequestStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};
