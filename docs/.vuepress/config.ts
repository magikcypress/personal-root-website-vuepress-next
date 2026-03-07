import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({

  title: 'Personal Root Website',
  description: 'Personal Root Website - Passion, Travel, Music, Eating, Streaming',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839" }],
    ['meta', { name: "robots", content: "noindex,nofollow" }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest" }],
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico" }],
    // Not clean
    ['link', { rel: "stylesheet", href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" }]
  ],

  locales: {
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Personal Root Website',
      description: 'Personal Root Website - Passion, Travel, Music, Eating, Streaming',
    },
    '/fr/': {
      lang: 'Français',
      title: 'Personal Root Website',
      description: 'Personal Root Website - Passion, Voyage, Musique, Manger, Streaming',
    },
  },

  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',

        sidebar: false,
        repo: 'https://github.com/magikcypress/personal-root-website-vuepress-next/',
        editLink: true,
        docsDir: 'docs/',
        editLinkText: 'Edit on Github',
        lastUpdated: true,
        contributors: true,
        navbar: [
          { text: 'About', link: '/#my-biggest-life' },
          { text: 'Blog', link: '/#blog' },
          { text: 'Travel', link: '/#travel' },
          { text: 'Passion', link: '/#passion' },
          { text: 'Live Stream', link: 'https://live.rouquin.me/' },
        ]
      },
      '/fr/': {
        selectLanguageName: 'Français',

        sidebar: false,
        repo: 'https://github.com/magikcypress/personal-root-website-vuepress-next/',
        editLink: true,
        docsDir: 'docs/',
        editLinkText: 'Edit on Github',
        lastUpdated: true,
        contributors: true,
        navbar: [
          { text: 'About', link: '/fr/#ma-plus-grande-vie' },
          { text: 'Blog', link: '/fr/#blog' },
          { text: 'Voyages', link: '/fr/#voyages' },
          { text: 'Passion', link: '/fr/#passion' },
          { text: 'Live Stream', link: 'https://live.rouquin.me/' },
        ]
      },
    }
  }),
  // build: {
  //   rollupOptions: {
  //     external: [
  //       '@vue-leaflet/vue-leaflet',
  //       'leaflet',
  //     ]
  //   }
  // }, 
  
  bundler: viteBundler(),  

  define: {
    chatid: process.env.CHATID,
    botkey: process.env.BOTKEY,
  },
})
