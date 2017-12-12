module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'AI Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AI homework' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" },
      { rel: "stylesheet", type: "text/css", href: "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js", type: 'text/javascript' },
      { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js", type: 'text/javascript' },
      { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js", type: 'text/javascript' },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js", type: 'text/javascript' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  env: {
    nuxt_HOST: process.env.HOST || '127.0.0.1',
    nuxt_PORT: process.env.PORT || 3000
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'vue-socket.io', 'socket.io-client'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [ { src: '~/plugins/socket.io', ssr: false } ]
}
