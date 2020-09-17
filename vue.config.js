// 导出
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('@/assets'))
      .set('common',resolve('@/common'))
      .set('components',resolve('@/components'))
      .set('network',resolve('@/network'))
      .set('views',resolve('@/views'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  }
};

