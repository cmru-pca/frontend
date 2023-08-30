import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["vuetify/lib/styles/main.sass"],

  build: {
    transpile: ["vuetify"]
  },

  modules: [
    ["@nuxtjs/google-fonts", {
      families: {
        Kanit: true,
      }
    }],
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],

})