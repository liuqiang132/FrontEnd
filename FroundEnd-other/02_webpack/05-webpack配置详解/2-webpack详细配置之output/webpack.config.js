

const {resolve} = require('path');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports  = {
    entry: '/src/index.js',
    output: {
        //文件名称（指定名称+目录）
        filename: 'js/[name].js',
        //输出文件目录(将来所哟资源输出的公共目录)
        path: resolve(__dirname,'build'),
        //所有资源引入公共路径前缀----->例如: imgs/a.jpg    /imgs/a.jpg ,一般用于生产环境
        publicPath: '/',
        //非入口chunk的名称
        chunkFilename: '[name]_chunk.js',
        library: '[name]'
    },
    plugins:[new HtmlWebpackPlugin()],
    mode: 'development'
};