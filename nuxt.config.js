module.exports = {
  mode: 'universal',
  head: {
    title: 'Example of a Serverless-SSR App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Project using Nuxt.js, the Serverless Framework & AWS' }
    ]
  },
  build: {
    vendor: ['axios'],
    publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/` // <= add the path to the cached files
  },
  srcDir: 'client/',
  performance: {
    gzip: false
  },
  router: {
    base: `/`
  },
  dev: false
}
