/*
 * @Author: mkamadeus
 * @Date: 2020-11-13 11:57:57
 * @Last Modified by: mkamadeus
 * @Last Modified time: 2020-11-16 00:12:29
 */

import {
  ChocolateRequest,
  ChocolateRequestStatus,
} from "@/types/chocolateRequest";
import axios from "axios";
import { parseStringPromise } from "xml2js";

export const getChocolateRequests = async (): Promise<ChocolateRequest[]> => {
  return axios
    .post<string>(
      `${process.env.REACT_APP_FACTORY_API_URL}/webapp/services/getAllStockRequests`,
      `<?xml version="1.0" ?>
      <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
          <S:Body>
              <ns2:getAllStockRequests xmlns:ns2="http://services/">
              </ns2:getAllStockRequests>
          </S:Body>
      </S:Envelope>`,
      { headers: { "content-type": "text/xml" }, withCredentials: true }
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      const chocolateRequests =
        result["S:Envelope"]["S:Body"][0]["ns2:getAllStockRequestsResponse"][0]
          .return[0].item;

      console.log(chocolateRequests);

      const chocolateRequestArray: ChocolateRequest[] = [];

      for (let i = 0; i < chocolateRequests.length; i++) {
        chocolateRequestArray.push({
          amount: parseInt(chocolateRequests[i].amount[0]),
          chocolate: {
            id: parseInt(chocolateRequests[i].chocolate[0].id[0]) as number,
            name: chocolateRequests[i].chocolate[0].name[0] as string,
            stock: parseInt(
              chocolateRequests[i].chocolate[0].stock[0]
            ) as number,
          },
          createdAt: new Date(chocolateRequests[i].createdAt[0]),
          updatedAt: new Date(chocolateRequests[i].updatedAt[0]),
          id: parseInt(chocolateRequests[i].id[0]),
          uuid: chocolateRequests[i].trackingId[0],
          status:
            chocolateRequests[i].delivered[0] === "true"
              ? ChocolateRequestStatus.DELIVERED
              : ChocolateRequestStatus.PENDING,
        });
      }
      return chocolateRequestArray;
    });
};

export const approveChocolateRequest = async ({
  uuid,
}: {
  uuid: string;
}): Promise<void> => {
  return await axios
    .post<string>(
      `${process.env.REACT_APP_FACTORY_API_URL}/webapp/services/deliverStockRequest`,
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:deliverStockRequest xmlns:ns2="http://services/">
              <arg0>${uuid}</arg0>
          </ns2:deliverStockRequest>
      </S:Body>
  </S:Envelope>
`,
      { headers: { "content-type": "text/xml" }, withCredentials: true }
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      return;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
