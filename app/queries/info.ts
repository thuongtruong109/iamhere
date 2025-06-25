import { defineQueryOptions } from "@pinia/colada";
import type { Info } from "~~/types/info";

export const infoQuery = defineQueryOptions({
  key: ["info"],
  query: () => useRequestFetch()("/api/info") as Promise<Info>,
});
