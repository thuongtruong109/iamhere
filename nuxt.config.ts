export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/icon"],
  css: ["~/assets/main.css"],
  runtimeConfig: {
    public: {
      mediumApiUrl: process.env.NUXT_PUBLIC_MEDIUM_API_URL,
      largeApiUrl: process.env.NUXT_PUBLIC_LARGE_API_URL,
      v6ApiUrl: process.env.NUXT_PUBLIC_V6_API_URL,
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-06-28",
  eslint: {
    config: {
      stylistic: {
        quotes: "single",
        commaDangle: "never",
      },
    },
  },
  head: {
    meta: [
      {
        httpEquiv: "Content-Security-Policy",
        content: "upgrade-insecure-requests",
      },
    ],
  },
});
