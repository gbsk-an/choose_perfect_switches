import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  store: true,
  ssr: true,
  devtools: { enabled: true },
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
    '@models': fileURLToPath(new URL('./core/models', import.meta.url)),
    '@fabrics': fileURLToPath(new URL('./core/fabrics', import.meta.url)),
    '@adapters': fileURLToPath(new URL('./core/adapters', import.meta.url)),
    '@configs': fileURLToPath(new URL('./core/configs', import.meta.url)),
    '@api': fileURLToPath(new URL('./core/api', import.meta.url)),
    '@services': fileURLToPath(new URL('./core/services', import.meta.url))
  },
  app: {
    baseURL: '/',
    pageTransition: { name: 'page' },
    layoutTransition: { name: 'layout' }
  },
  css: [{ src: '@/assets/styles/index.scss', lang: 'scss' }],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/global/colors.scss";
            @import "@/assets/styles/global/mixins.scss";
          `
        }
      }
    }
  },
  modules: [['@pinia/nuxt', { disableVuex: false }], '@nuxtjs/stylelint-module', '@nuxtjs/eslint-module', 'nuxt-icons'],
  nitro: {
    plugins: ['@/nitro/plugins/hidePoweredBy.ts']
  }
})
