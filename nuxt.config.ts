export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/eslint", "@pinia/nuxt", "@pinia/colada-nuxt", "@nuxt/icon"],
  css: ["~/assets/main.css"],
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-06-25",
  eslint: {
    config: {
      stylistic: {
        quotes: "single",
        commaDangle: "never",
      },
    },
  },
});