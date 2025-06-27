import { defineQueryOptions } from "@pinia/colada";
import type { Medium, Large, V6 } from "~~/types/info";

export const mediumQuery = defineQueryOptions({
  key: ["medium"],
  query: async () => {
    const { data } = await useFetch<Medium>("https://apip.cc/json");
    return data.value as Medium;
  },
});

export const v6Query = defineQueryOptions({
  key: ["v6"],
  query: async () => {
    const { data } = await useFetch<V6>("https://6.ident.me/json");
    return data.value as V6;
  },
});

export const largeQuery = defineQueryOptions({
  key: ["large"],
  query: async () => {
    const { data } = await useFetch<Large>("http://ipwho.is");
    return data.value as Large;
  },
});
