// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Lucky Developments',
      meta: [
        { name: 'description', content: 'Lucky Developments is a solo Australian developer specialising in Lua/GLua, Discord bots, and full-stack web development.' },
        { name: 'author', content: 'Lucky Developments' },
        { name: 'theme-color', content: '#007bff' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Sora:wght@300;400;600;700;800&display=swap' },
      ]
    }
  }
})