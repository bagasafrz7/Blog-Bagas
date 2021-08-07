/* eslint-disable prettier/prettier */
// eslint-disable-next-line nuxt/no-cjs-in-config
const axios = require('axios');

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bagas Afrizal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tulisan dari Bagas Afrizal'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Barlow&display=swap'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/tsparticles/1.18.11/tsparticles.min.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/particles.js', '~/plugins/disqus'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'bootstrap-vue/nuxt'
    ],
    ['@nuxtjs/color-mode'],
    ['vue-social-sharing/nuxt'],
    ['vue-sweetalert2/nuxt'],
    // ['@nuxtjs/svg', '@nuxtjs/color-mode'],
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faLightbulb', 'faVirus', 'faNetworkWired', 'faMoneyCheckAlt', 'faStore', 'faBars']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub', 'faInstagram', 'faTwitter', 'faLinkedin', 'faVuejs', 'faReact', 'faHtml5', 'faCss3Alt', 'faWordpressSimple', 'faPhp', 'faBootstrap', 'faJs', 'faNodeJs']
          },
          {set: '@fortawesome/free-regular-svg-icons',
          icons: ['faBuilding', 'faHospital', 'faComments', 'faSun', 'faMoon']
          },
      ]
   }],
    [
      '@nuxtjs/moment'
    ],
    ['@nuxtjs/axios'],
    // https://go.nuxtjs.dev/axios
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV === 'production'
            ? 'RHIAgV9lKDsiWKVx9EmyGQtt'
            : 'oUtoAXIMfGGV5Ijt6ZNGQAtt',
        cacheProvider: 'memory'
      }
    ]
  ],

  // fontawesome: {
  //   component: 'Fa',
  //   icons: {
  //     solid:true,
  //     brands: true
  //   }
  // },

  bootstrapVue: {
    icons: true
  },

  generate: {
    routes() {
      return axios
        .get(
          'https://api.storyblok.com/v1/cdn/stories?version=published&token=RHIAgV9lKDsiWKVx9EmyGQtt&starts_with=blog&cv=' +
          // eslint-disable-next-line prettier/prettier
          Math.floor(Date.now() / 1e3)
        )
        .then((res) => {
          const blogPost = res.data.stories.map((bp) => bp.full_slug)
          return ['/', 'blog', ...blogPost]
        })
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: true,
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", {
        "loose": true
      }]
      ]
    },
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  },

  extend(config, ctx) { }
}
