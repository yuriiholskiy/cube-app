export default {
  mode: 'universal',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'hidden'
    }
  },
  
  loading: { color: 'blue' },

  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in'
  // },
  
  css: [
    '~/assets/main.css'
  ],

  plugins: [
    {
      src: '~/plugins/custom-appear',
      mode: 'client'
    }
  ],

  buildModules: [
  ],

  modules: [
  ],

  build: {
    extend (config, ctx) {
    }
  }
}
