// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'uft-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'Wanda Gallery',
      script: [
        {
          src: 'https://aframe.io/releases/1.2.0/aframe.min.js',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-FE9JGB36JR',
          async: true,
        },
        {
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FE9JGB36JR');
          `,
          type: 'text/javascript',
        }
      ]
    }
  },


  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
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
    clientConfigs: {
      default: '~/apollo.ts',
    },
  },

  components: {
    global: true,
    dirs: ['~/components']
  },
})