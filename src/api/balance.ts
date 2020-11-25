/*
 * @Author: mkamadeus
 * @Date: 2020-11-16 01:03:12
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-25 15:00:00
 */

import axios from "axios";
import { parseStringPromise } from "xml2js";
import { generateDummyPromise } from "./dummy";
import { factoryApi } from "./instance";

export const getBalance = async (): Promise<number> => {
  return await factoryApi
    .post<string>(
      "/getBalance",
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:getBalance xmlns:ns2="http://services/">
          </ns2:getBalance>
      </S:Body>
  </S:Envelope>`
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      return parseInt(
        result["S:Envelope"]["S:Body"][0]["ns2:getBalanceResponse"][0].return[0]
      ) as number;
    });
};
