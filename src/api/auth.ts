import axios from "axios";
import { parseStringPromise } from "xml2js";
import { factoryApi } from "./instance";

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return await factoryApi
    .post<string>(
      "/login",
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:login xmlns:ns2="http://services/">
              <arg0>${username}</arg0>
              <arg1>${password}</arg1>
          </ns2:login>
      </S:Body>
  </S:Envelope>`
    )
    .then((response) => {
      console.log(response);
      return parseStringPromise(response.data);
    })
    .then((result) => {
      return (
        result["S:Envelope"]["S:Body"][0]["ns2:loginResponse"][0].return[0] ===
        "true"
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = async () => {
  return await factoryApi
    .post<string>(
      "/logout",
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:logout xmlns:ns2="http://services/">
          </ns2:logout>
      </S:Body>
  </S:Envelope>`
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      return (
        result["S:Envelope"]["S:Body"][0]["ns2:loginResponse"][0].return[0] ===
        "true"
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const checkSession = async () => {
  return await factoryApi
    .post<string>(
      "/checkSession",
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:checkSession xmlns:ns2="http://services/">
          </ns2:checkSession>
      </S:Body>
  </S:Envelope>`
    )
    .then((response) => {
      return parseStringPromise(response.data);
    })
    .then((result) => {
      return (
        result["S:Envelope"]["S:Body"][0]["ns2:checkSessionResponse"][0]
          .return[0] === "true"
      );
    })
    .catch((err) => {
      console.log(err);
    });
};
