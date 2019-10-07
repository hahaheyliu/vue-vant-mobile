const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  publicPath: '/',
  devServer: {
    port: 9000
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('styles', resolve('src/assets/styles'))
      .set('request', resolve('src/utils/request'))
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['van-circle__layer']
          })
        ]
      }
    }
  }
}
