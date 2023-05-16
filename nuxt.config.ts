// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'uft-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      script: [
        {
          src: 'https://aframe.io/releases/1.2.0/aframe.min.js',
        }
      ]
    }
  },
  
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    "@nuxt/content",
    "nuxt-icon",
    '@nuxtjs/device',
    '@nuxtjs/apollo',
  ],

  css: [
    '~/assets/scss/_main.scss'
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://admin.wanda.gallery/graphql'
      }
    },
  },

  components: {
    global: true,
    dirs: ['~/components']
  }
})