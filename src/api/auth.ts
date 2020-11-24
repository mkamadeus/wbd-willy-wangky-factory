import axios from "axios";
import { parseStringPromise } from "xml2js";

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  console.log(process.env);
  return await axios
    .post<string>(
      `${process.env.REACT_APP_FACTORY_API_URL}/webapp/services/login`,
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:login xmlns:ns2="http://services/">
              <arg0>${username}</arg0>
              <arg1>${password}</arg1>
          </ns2:login>
      </S:Body>
  </S:Envelope>`,
      { headers: { "content-type": "text/xml" }, withCredentials: true }
    )
    .then((response) => {
      console.log(response);
      return parseStringPromise(response.data);
    })
    .then((result) => {
      return result["S:Envelope"]["S:Body"][0]["ns2:loginResponse"][0]
        .return[0] as boolean;
    })
    .catch((err) => {
      console.log(err);
    });
};
