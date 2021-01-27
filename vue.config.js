const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {// 这个插件可以在每个scss文件中自动引入'src/assets/variables.scss'中scss变量，避免在每个文件中都手动引入一遍
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/assets/variables.scss')]
    }
  }
}
