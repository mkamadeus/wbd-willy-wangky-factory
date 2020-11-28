/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:54:13
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-25 15:04:31
 */

import { Chocolate } from "@/types/chocolate";
import { parseStringPromise } from "xml2js";
import { factoryApi } from "./instance";

export const getChocolates = async (): Promise<Chocolate[]> => {
  return await factoryApi
    .post<string>(
      "/getAllChocolates",
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:getAllChocolates xmlns:ns2="http://services/">
          </ns2:getAllChocolates>
      </S:Body>
  </S:Envelope>`
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

export const createChocolate = async ({
  uuid,
  quantity,
}: {
  uuid: string;
  quantity: number;
}) => {
  return await factoryApi
    .post<string>(
      "/makeChocolate",
      `<?xml version="1.0" ?>
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
        <S:Body>
            <ns2:makeChocolate xmlns:ns2="http://services/">
                <arg0>${uuid}</arg0>
                <arg1>${quantity}</arg1>
            </ns2:makeChocolate>
        </S:Body>
    </S:Envelope>
`
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      return (
        result["S:Envelope"]["S:Body"][0]["ns2:makeChocolateResponse"][0]
          .return[0] === "true"
      );
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};
