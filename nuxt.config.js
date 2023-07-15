const opn = require('opn')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Web Absensi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Absensi adalah website yang dikembangkan oleh siswa bootcamp yayasan bina nusantara semarang untuk menejemen absen secara digital dan di lengkapi dengan smart logice dan lainnya' },
      { name: 'format-detection', content: 'telephone=+6289504731540' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'author', content: 'Yayasan Bina Nusantara' },
      // { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' },

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "plugins/axios.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  server: {
    port: 55554
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'defu'
    ],
    extend(config, { }) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  generate: {
    dir: 'public'
  },
  hooks: {
    listen(server, { host, port }) {
      opn(`http://${host}:${port}`)
    }
  }
}
