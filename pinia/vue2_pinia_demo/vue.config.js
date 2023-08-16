const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  //服务器配置
  devServer:{
     port: 8001,
     host: '0.0.0.0',
     https: false,
     open: true,
     //代理服务器的配置
     proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
  
})
