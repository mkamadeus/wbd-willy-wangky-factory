/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:54:13
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-13 14:19:18
 */

import { Chocolate } from "@/types/chocolate";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { generateDummyPromise } from "./dummy";

export const getChocolates = async (): Promise<Chocolate[]> => {
  return await axios
    .post<string>(
      `${process.env.REACT_APP_FACTORY_API_URL}/webapp/services/getAllChocolates`,
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:getAllChocolates xmlns:ns2="http://services/">
          </ns2:getAllChocolates>
      </S:Body>
  </S:Envelope>`,
      { headers: { "content-type": "text/xml" }, withCredentials: true }
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      const chocolates =
        result["S:Envelope"]["S:Body"][0]["ns2:getAllChocolatesResponse"][0]
          .return[0].item;
      console.log("lol", chocolates);
      const chocolatesArray: Chocolate[] = [];
      for (let i = 0; i < chocolates.length; i++) {
        chocolatesArray.push({
          id: chocolates[i].id[0],
          name: chocolates[i].name[0],
          stock: chocolates[i].stock[0],
          uuid: chocolates[i].UUID[0],
        });
      }
      return chocolatesArray;
    });
};

export const getChocolateById = async (): Promise<Chocolate> => {
  return await generateDummyPromise<Chocolate>({
    id: 1,
    name: "Cadbury",
    stock: 3,
  });
};

export const createChocolate = () => {
  //
};

export const updateChocolate = () => {
  //
};

export const deleteChocolate = () => {
  //
};
