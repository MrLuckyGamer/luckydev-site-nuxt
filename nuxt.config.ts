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
        { name: 'description', content: 'Lucky Developments is a solo Australian developer specialising in Lua/GLua, Discord bots, and full-stack web development., hire for affordable code solutions, and connect with a passionate dev community.' },
        { name: 'keywords', content: 'Lucky Developments, Lua developer, GLua developer, Discord bot developer, web developer Australia, PHP developer, Python developer, JavaScript developer, FiveM scripts, Garry\'s Mod scripts, freelance developer' },
        { name: 'author', content: 'Lucky Developments' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'theme-color', content: '#007bff' },
        { name: 'image', content: 'https://luckydev.xyz/public/images/logo.png' },
        { name: 'image:alt', content: 'Lucky Developments logo' },
        { name: 'image:width', content: '1200' },
        { name: 'image:height', content: '630' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Lucky Developments' },
        { property: 'og:title', content: 'Lucky Developments' },
        { property: 'og:description', content: 'Lucky Developments is a solo Australian developer specialising in Lua/GLua, Discord bots, and full-stack web development.' },
        { property: 'og:url', content: 'https://luckydev.xyz/' },
        { property: 'og:image', content: 'https://luckydev.xyz/public/images/logo.png' },
        { property: 'og:image:alt', content: 'Lucky Developments logo' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_AU' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lucky Developments' },
        { name: 'twitter:description', content: 'Lucky Developments is a solo Australian developer specialising in Lua/GLua, Discord bots, and full-stack web development.' },
        { name: 'twitter:image', content: 'https://luckydev.xyz/public/images/logo.png' },
        { name: 'twitter:image:alt', content: 'Lucky Developments logo' },
      ],
      link: [
        { rel: 'canonical', href: 'https://luckydev.xyz/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'apple-touch-icon', href: 'https://luckydev.xyz/public/images/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Sora:wght@300;400;600;700;800&display=swap' },
      ]
    }
  }
})