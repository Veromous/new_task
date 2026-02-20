// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  icon: {
    serverBundle: 'auto',
    clientBundle: {
      icons: [
        'lucide:clock',
        'lucide:users',
        'lucide:gauge',
        'lucide:armchair',
        'lucide:settings'
      ]
    }
  }
})
