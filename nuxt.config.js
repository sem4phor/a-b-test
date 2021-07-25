import dotenv from "dotenv";
dotenv.config();

const { GOOGLE_ANALYTICS_ID, GOOGLE_OPTIMIZE_CONTAINER_ID } = process.env; // eslint-disable-line

export default {
  target: 'static',
  generate: {
    routes: ['blinkist-app', 'article-2']
  },
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
  plugins: [
    '~/plugins/experiments.client.js',
    '~/plugins/persistedState.client.js'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content',
  ],
}
