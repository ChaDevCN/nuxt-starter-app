// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.less'
  ],
  modules: [
    '@unocss/nuxt',
    '@nuxt/ui'
  ],
  typescript: {
    typeCheck: true
  },
  // https://uno.antfu.me/
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
    safelist: []
  }
})
