import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  app: {
    head: {
      title: "Rizki CLI - Scaffold Projects with Precision",
      meta: [
        {
          name: "description",
          content:
            "Rizki CLI mempermudah pembuatan project dari template. Setup instan, light and fast.",
        },
      ],
      htmlAttrs: {
        lang: "id",
        class: "scroll-smooth",
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxt/icon"],
});
