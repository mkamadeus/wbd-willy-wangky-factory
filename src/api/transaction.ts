import { Ingredient } from "@/types/ingredient";
import { supplierApi } from "./instance";
import { factoryApi } from "./instance";
import { parseStringPromise } from "xml2js";

interface TransactionRequest {
  balance: number;
  ingredients: { quantity: number; uuid: string }[];
}

interface TransactionResponse {
  success: boolean;
  balance: number;
  ingredientsList: {
    quantity: number;
    uuid: string;
    name: string;
    expiryDate: string;
    totalPrice: number;
  }[];
}

interface AddIngredientStockRequest {
  uuid: string;
  name: string;
  stock: number;
  expiryDate: Date;
  totalPrice: number;
}

interface AddIngredientStockResponse {
  success: boolean;
}

const addIngredientStock = async ({
  data,
}: {
  data: AddIngredientStockRequest;
}) => {
  return await factoryApi
    .post<string>(
      "/addIngredientStock",
      `<?xml version="1.0" ?>
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
        <S:Body>
            <ns2:addIngredientStock xmlns:ns2="http://services/">
                <arg0>${data.uuid}</arg0>
                <arg1>${data.name}</arg1>
                <arg2>${data.stock}</arg2>
                <arg3>${data.expiryDate.toISOString().split("T")[0]}</arg3>
                <arg4>${data.totalPrice}</arg4>
            </ns2:addIngredientStock>
        </S:Body>
    </S:Envelope>`
    )
    .then((response) => {
      console.log(response);
      return parseStringPromise(response.data);
    });
};

export const createTransaction = async ({
  data,
}: {
  data: TransactionRequest;
}) => {
  return await supplierApi
    .post<TransactionResponse>("/transaction", data)
    .then((response) => {
      const ingredientsList = response.data.ingredientsList;
      return Promise.all(
        ingredientsList.map((ingredient) => {
          const uuid = ingredient.uuid;
          const name = ingredient.name;
          const stock = ingredient.quantity;
          const expiryDate = new Date(ingredient.expiryDate);
          const totalPrice = ingredient.totalPrice;
          return addIngredientStock({
            data: { uuid, name, stock, expiryDate, totalPrice },
          });
        })
      );
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};
