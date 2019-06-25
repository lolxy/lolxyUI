const isProd = process.env.NODE_ENV === 'production'

const options = {
  presets: ['@vue/app']
}

if (isProd) {
  options.presets = [
    [
      '@vue/app',
      {
        polyfills: [
          'es6.map',
          'es6.object.assign',
          'es6.object.keys',
          'es7.object.entries',
          'es7.array.includes',
          'es6.array.fill',
          'es6.symbol'
        ]
      }
    ]
  ]

  options.plugins = ['lodash']
}

module.exports = options
