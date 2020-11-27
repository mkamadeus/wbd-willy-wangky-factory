/*
 * @Author: mkamadeus
 * @Date: 2020-11-16 13:39:09
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-25 20:11:31
 */

import { Ingredient } from "@/types/ingredient";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { generateDummyPromise } from "./dummy";
import { factoryApi, supplierApi } from "./instance";

export const getFactoryIngredients = async () => {
  return await factoryApi
    .post<string>(
      "/getAvailableIngredients",
      `<?xml version="1.0" ?>
      <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
          <S:Body>
              <ns2:getAvailableIngredients xmlns:ns2="http://services/">
              </ns2:getAvailableIngredients>
          </S:Body>
      </S:Envelope>`
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      const ingredients =
        result["S:Envelope"]["S:Body"][0][
          "ns2:getAvailableIngredientsResponse"
        ][0].return[0].item;
      const ingredientsArray = [];
      for (let i = 0; i < ingredients.length; i++) {
        ingredientsArray.push({
          id: ingredients[i].id[0],
          name: ingredients[i].name[0],
          stock: ingredients[i].availableStock[0],
          uuid: ingredients[i].uuid[0],
        });
      }
      return ingredientsArray;
    });
};

export const getSupplierIngredients = async () => {
  return await supplierApi
    .get<Ingredient[]>("/ingredient?show_price=1")
    .then((response) => {
      return response.data;
    });
};
