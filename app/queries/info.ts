import { defineQueryOptions } from "@pinia/colada";
import type { Info } from "~~/types/info";

export const infoQuery = defineQueryOptions({
  key: ["info"],
  query: async () => {
    const { data } = await useFetch<Info>("https://apip.cc/json");
    return data.value as Info;
  },
});

export const v6Query = defineQueryOptions({
  key: ["v6"],
  query: async () => {
    const { data } = await useFetch<Info>("https://6.ident.me/json");
    return data.value as Info;
  },
});
