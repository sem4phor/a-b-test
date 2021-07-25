import dotenv from "dotenv";
dotenv.config();

const { GOOGLE_ANALYTICS_ID, GOOGLE_OPTIMIZE_CONTAINER_ID } = process.env; // eslint-disable-line

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    routes: ['blinkist-app', 'article-2']
  },

  router: {
    // middleware: 'trackPageview',
    base: '/<repository-name>/'
  },

  env: {
    GOOGLE_ANALYTICS_ID,
    GOOGLE_OPTIMIZE_CONTAINER_ID
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'a-b-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/experiments.client.js',
    '~/plugins/tracking.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
