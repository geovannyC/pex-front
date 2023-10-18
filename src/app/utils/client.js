import axios from "axios";

export const client = axios.create({
  baseURL: "http://127.0.0.1:4000",
  timeout: 2000,

  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE",
  //     "Access-Control-Allow-Methods": "Content-Type",
  //   },
});
