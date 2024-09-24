// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxtjs/feed',
  ],
  feed: [
    {
      path: '/news.rss',
      async create(feed) {
        feed.options = {
          title: "Your name's blog",
          link: 'http://static.feed.rbc.ru/rbc/logical/footer/news.rss',
          description: "Your name's blog feed!",
        }

        // await API call with our posts data
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})