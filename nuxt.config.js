// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hanna Collection Shop',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  devtools: { enabled: false },

  css: [
    '@/assets/css/tailwind.css',
    '@fontsource/pt-serif/400.css',
    '@fontsource/montserrat/400.css',
  ],

  modules: ['@nuxt/ui', '@vueuse/nuxt'],

  colorMode: {
    preference: 'light',
  },
  
  
})
