import { defineQueryOptions } from "@pinia/colada";

export const infoQuery = defineQueryOptions({
  key: ["info"],
  query: () => useRequestFetch()("/api/info") as Promise<any[]>,
});
