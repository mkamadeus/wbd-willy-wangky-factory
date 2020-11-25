import Axios from "axios";

export const factoryApi = Axios.create({
  baseURL: `${process.env.REACT_APP_FACTORY_API_URL}/webapp/services`,
  headers: { "content-type": "text/xml" },
  method: "POST",
  withCredentials: true,
});

export const supplierApi = Axios.create({
  baseURL: `${process.env.REACT_APP_SUPPLIER_API_URL}/api`,
});
