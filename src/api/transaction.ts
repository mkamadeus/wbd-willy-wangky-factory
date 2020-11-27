import { Ingredient } from "@/types/ingredient";
import { supplierApi } from "./instance";
interface TransactionRequest {
  balance: number;
  ingredients: { quantity: number; uuid: string }[];
}

interface TransactionResponse {
  success: boolean;
  balance: number;
  ingredientList: Ingredient[];
}

export const createTransaction = async ({
  data,
}: {
  data: TransactionRequest;
}) => {
  return await supplierApi
    .post<TransactionResponse>("/transaction", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};
