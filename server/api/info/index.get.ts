import type { Info } from "~~/types/info";

// "https://ipinfo.io/json"
let cachedData: Info | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 1 * 60 * 1000;

export default eventHandler(async (event) => {
  const now = Date.now();

  if (!cachedData || now - cacheTimestamp > CACHE_DURATION) {
    cachedData = await $fetch("https://apip.cc/json");
    cacheTimestamp = now;
  }

  return {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
    status: 200,
    data: cachedData,
  };
});
