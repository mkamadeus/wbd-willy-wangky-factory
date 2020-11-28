import axios from "axios";
import { parseStringPromise } from "xml2js";

export const addChocolateStock = async ({
  uuid,
}: {
  uuid: string;
}): Promise<void> => {
  return await axios
    .post<string>(
      `${process.env.REACT_APP_FACTORY_API_URL}/webapp/services/makeChocolate`,
      `<?xml version="1.0" ?>
  <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
          <ns2:makeChocolate xmlns:ns2="http://services/">
              <arg0>${uuid}</arg0>
              <arg1>1</arg1>
          </ns2:makeChocolate>
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
      throw new Error(err.message);
    });
};
