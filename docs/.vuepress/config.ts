import { chartPlugin } from  'vuepress-plugin-chart'
import { path } from '@vuepress/utils'
import { defaultTheme } from 'vuepress'

export default {
  /**
   * Ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  title: 'Personal Root Website',
  /**
   * Ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  description: 'Personal Root Website - Passion, Travel, Music, Eating, Streaming',
  /**
   * Ref：https://npmmirror.com/package/vuepress-plugin-ipfs
   */
   //base: 'ipns/_ipfs2.rouquin.me/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v2.vuepress.vuejs.org/guide/configuration.html
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "robots", content: "noindex,nofollow"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico"}],
    // Not clean
    ['link', { rel: "stylesheet", href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"}]
  ],

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Personal Root Website',
      description: 'Personal Root Website - Passion, Travel, Music, Eating, Streaming'
    },
    '/fr/': {
      lang: 'Français',
      title: 'Personal Root Website',
      description: 'Personal Root Website - Passion, Travel, Music, Eating, Streaming'
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v2.vuepress.vuejs.org/guide/theme.html
   */
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',

        repo: 'https://github.com/magikcypress/personal-root-website-vuepress-next/',
        editLink: true,
        docsDir: 'docs/',
        editLinkText: 'Edit on Github',
        lastUpdated: true,
        contributors: true,
        contributorsText: 'Cyp',
        navbar: [
          {
            text: 'Directions',
            children: [
              {
                text: 'My Biggest Life',
                link: '/#my-biggest-life',
                // this item will always be active
                activeMatch: '#my-biggest-life',
              },
              {
                text: 'Travel',
                link: '/#travel',
                // this item will be active when current route path starts with /foo/
                // regular expression is supported
                activeMatch: '#travel',
              },
              {
                text: 'Passion',
                link: '/#passion',
                // this item will be active when current route path starts with /foo/
                // regular expression is supported
                activeMatch: '#passion',
              },
              {
                text: 'Live Stream',
                link: 'https://live.rouquin.me/',
                // this item will be active when current route path starts with /foo/
                // regular expression is supported
                activeMatch: 'https://live.rouquin.me/',
              },
            ],
          },
        ],
        sidebar: {
          '/travel/': [
            {
              text: 'Travel',
              collapsible: false,
              children: [
                '',
                'Maroc',
                'Vietnam',
                'Bresil',
                'AmeriqueduSud',
                'Liban',
                'Canada',
                'Japon',
              ]
            }
          ],
        }
      },
      '/fr/': {
        selectLanguageName: 'Français',

        repo: 'https://github.com/magikcypress/personal-root-website-vuepress-next/',
        editLink: true,
        docsDir: 'docs/',
        editLinkText: 'Edit on Github',
        lastUpdated: true,
        contributors: true,
        contributorsText: 'Cyp',
        navbar: [
          {
            text: 'Directions',
            children: [
              {
                text: 'Ma plus grande vie',
                link: '/fr/#ma-plus-grande-vie',
                // this item will always be active
                activeMatch: '#ma-plus-grande-vie',
              },
              {
                text: 'Voyages',
                link: '/fr/#voyages',
                // this item will be active when current route path starts with /foo/
                // regular expression is supported
                activeMatch: '#voyages',
              },
              {
                text: 'Passion',
                link: '/fr/#passion',
                // this item will be active when current route path starts with /foo/
                // regular expression is supported
                activeMatch: '#passion',
              },
              {
                text: 'Live Stream',
                link: 'https://live.rouquin.me/',
                // this item will be active when current route path starts with /foo/
                // regular expression is supported
                activeMatch: 'https://live.rouquin.me/',
              },
            ],
          },
        ],
        sidebar: {
          '/fr/travel/': [
            {
              text: 'Travel',
              collapsible: false,
              children: [
                '',
                'Maroc',
                'Vietnam',
                'Bresil',
                'AmeriqueduSud',
                'Liban',
                'Canada',
                'Japon',
              ]
            }
          ],
        }        

      },
    }
  }), 
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    chartPlugin(),
    'copyright', 
    {
        // texts will be unselectable
        noSelect: true,
        noCopy: true
    },
    'register-components',
    {
      components: {
        componentsDir: path.resolve(__dirname, './components'),
      },
    }
  ],

  build: {
    rollupOptions: {
      external: [
        '@vue-leaflet/vue-leaflet',
      ]
    }
  }
}