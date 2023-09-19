import messages from "./locale";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "senat-website",
    htmlAttrs: {
      AcceptLanguage: "ru",
      ssr: false,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "ant-design-vue/dist/antd.css",
    "~/assets/scss",
    "@/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/antd-ui",
    {
      src: "~/plugins/vue-awesome-swiper.js",
      ssr: false,
    },
    {
      src: "~/plugins/perfect-scrollbar.js",
      ssr: false,
    },
    { src: "~/plugins/axios.js", mode: "client" },
    { src: "~/plugins/aos", ssr: false },
  ],
  i18n: {
    locales: [
      {
        code: "ru",
        name: "Русский",
      },

      {
        code: "en",
        name: "English",
      },
    ],
    // strategy: "prefix_except_default",
    defaultLocale: "ru",
    // switchLocalePath: '/:lang/:route',
    vueI18n: {
      fallBackLocale: "ru",
      messages: messages,
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/svg", "@nuxtjs/axios", "nuxt-i18n"],

  axios: {
    baseUrl: "https://admin.uzpharmforum.com/api/v1/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
