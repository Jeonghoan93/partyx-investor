// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  plugins: ['~/plugins/vuetify.ts', '~/plugins/axios.ts'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  components: [
    {
      path: '~/components'
    }
  ],

  css: ['~/assets/css/global.css', '@mdi/font/css/materialdesignicons.min.css'],
  srcDir: 'src',
  typescript: {
    strict: true
  },

  build: {
    transpile: ['vuetify']
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
      backendBaseUrl:
        process.env.BACKEND_BASE_URL || 'https://api.partyxberlin.com'
    }
  },

  compatibilityDate: '2024-09-07'
})
