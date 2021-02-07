const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {// 这个插件可以在每个scss文件中自动引入'src/assets/variables.scss'中scss变量，避免在每个文件中都手动引入一遍
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/assets/variables.scss')]
    }
  },
  //配置px2rem插件 postcss-plugin-px2rem lib-flexible
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-plugin-px2rem")({
            rootValue: 37.5, // 表示设计稿大小是375，因为vant库中也是375
            exclude: /node_module/,
          })
        ]
      }
    }
  }
}
