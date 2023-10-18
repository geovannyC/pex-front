import { client } from "./client";

export const getAllpublications = async () => {
  const { data } = await client.request({
    url: "/publication/getAll",
    method: "get",
  });
  return data;
};
