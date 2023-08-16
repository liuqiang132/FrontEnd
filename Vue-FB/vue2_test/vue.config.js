
module.exports = {
  //关闭语法检查
  lintOnSave:false,
  //开启代理服务器(配置代理方式一)
  // devServer:{
  //   proxy: "http://localhost:5000"
  // },
  //开启代理服务器(配置代理方式二)
  devServer: {
    open: true,//启动项目时自动打开浏览器运行
    port: 8888,//设置端口号
    // https: false,
    // host: "localhost",
    // productionSourceMap: false,//打包时不生成.map文件,加快打包速度
    proxy: {
      '/atguigu': { //匹配所有以‘/atguigu’开头的请求路径
        target: 'http://localhost:5000', //代理目标的基础路径
        pathRewrite:{"^/atguigu":""},
        ws: true, //用于支持websocket
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:5001',
        pathRewrite:{"^/api":""},
        ws: true,
        changeOrigin: true
      }, 
    }
  }
}