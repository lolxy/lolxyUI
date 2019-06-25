let publicPath = '/'
const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  publicPath = process.env.BASE_URL
}

// const dayjs = require('dayjs')
// const { version } = require('./package.json')

// const revision = require('child_process')
//   .execSync('git describe --always')
//   .toString()
//   .trim()

// process.env.VUE_APP_VERSION = `${version}-${revision}`
// process.env.VUE_APP_RELEASE_DATE = `${dayjs().format('YYYY-MM-DD HH:mm:ss')}`

module.exports = {
  // 基本路径
  publicPath,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: isProd ? true : false,
  // webpack-dev-server 相关配置
  outputDir: 'dist',

  devServer: {
    disableHostCheck: true
  },

  configureWebpack: {
    performance: {
      hints: false
    }
  },

  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}
