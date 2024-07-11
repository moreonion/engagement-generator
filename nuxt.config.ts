// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Free: Rich supporter engagement ideas',
      meta: [
        { name: 'description', content: 'Generate ideas that will drive action and deepen the relationships with your supporters.' },
        { name: 'keywords', content: 'Engagement, supporter experience, non-profit idea generator, impact ideas' },
        { name: 'robots', content: 'index, follow' },

        { name: 'msapplication-TileColor', content: '#ffffff'},
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
        { name: 'theme-color', content: '#ffffff'},

        { property: 'og:title', content: 'Free: Rich supporter engagement ideas'},
        { property: 'og:image', content: 'https://assets.impact-stack.org/mo7/v1/sharing__engagement_action_generator.png'},
        { property: 'og:type', content: 'website'},
        { property: 'og:url', content: 'https://engagement.more-onion.com/'},
        { property: 'og:site_name', content: 'Engagement action idea generator'},
        { property: 'og:description', content: 'Generate ideas that will drive action and deepen the relationships with your supporters.'},

        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:title', content: 'Free: Rich supporter engagement ideas'},
        { name: 'twitter:description', content: 'Generate ideas that will drive action and deepen the relationships with your supporters.'},
        { name: 'twitter:image', content: 'https://assets.impact-stack.org/mo7/v1/sharing__engagement_action_generator.png'},
        { name: 'twitter:site', content: '@moreonion'},
        { name: 'twitter:creator', content: '@moreonion'},
      ],
      link: [
        { rel: 'preconnect', href: 'https://assets.impact-stack.org' },
        { rel: 'stylesheet', href: 'https://assets.impact-stack.org/mo7/v1/main.css', crossorigin: '' },

        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },

        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },

        { rel: 'manifest', href: '/manifest.json' },
      ],
      script: [
      { id: 'ze-snippet', src: 'https://static.zdassets.com/ekr/snippet.js?key=90806635-1c7b-4de2-ae19-381c8f2895b5' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL
    }
  }
})
