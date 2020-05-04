const axios = require('axios');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF4444' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/date-filter.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  pageTransition: {
    name: 'slide-fade',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  generate: {
    routes: function() {
      return axios.get('https://nuxt-test-2da65.firebaseio.com/posts.json')
        .then(res => {
          const routes = [];
          for (const key in res.data) {
            routes.push('/posts/' + key)
          }
          return routes
        })
    }
  }
}
