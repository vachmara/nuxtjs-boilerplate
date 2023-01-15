export default defineNuxtConfig({
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
  },

  ssr: true,

  css: ["~/assets/style/main.scss"],

  components: true,

  build: {
    transpile: ["@heroicons/vue"],
  },

  modules: ["nuxt-icon", "@nuxt/image-edge", "@pinia/nuxt", "nuxt-headlessui"],

  imports: {
    dirs: ["store"],
  },

  runtimeConfig: {
    public: {
      appEnv: process.env.APP_ENV,
      googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      apiUrl: process.env.API_URL,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    dir: "assets/media",
  },
});
