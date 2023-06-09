// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'uft-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'Wanda Gallery',
      meta: [ 
        { name: 'theme-color', content: '#BCC6CC',} ,// IOS background color (Safari)
        { name: 'description', content: 'Wanda Tuerlinckx, originally from Belgium, is a fine art photographer, living and working in Amsterdam. Her photos are part of the collections of the Rijksmuseum Amsterdam and the Amsterdam City Archives.' },
        { name: 'author', content: 'Wanda Tuerlinckx'},
        { name: 'keywords', content: 'Virtual, Gallery, Virtual Gallery, 3D, Wanda Tuerlinckx, Wanda, Tuerlinckx, Photographer, City Archives, Wanda Virtual Gallery, Wanda Tuerlinckx Virtual Gallery, Robots, Humanoids, Androids, Biomimetics, Monotone, Greyscale, wanda.gallery, Fine art, revolution, transform, life, work, relationships, humans, human, experience, impactful, human story'},
        { property: 'og:title', content: 'Wanda Tuerlinckx'},
        { property: 'og:description', content: 'Wanda Tuerlinckx, originally from Belgium, is a fine art photographer, living and working in Amsterdam. Her photos are part of the collections of the Rijksmuseum Amsterdam and the Amsterdam City Archives.'},
        { property: 'og:image', content: '~/public/hero-image.webp'},
      ],
      script: [
        {
          src: 'https://aframe.io/releases/1.2.0/aframe.min.js',
        },
        {
          src: 'https://tools.luckyorange.com/core/lo.js?site-id=29395730',
          async: true,
          defer: true,
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