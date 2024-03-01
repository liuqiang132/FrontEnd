import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    // 导入时想要省略的扩展名列表
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.json'],
  },
   //预览设置  npm run build　打包之后，会生成dist文件 然后运行npm run preview；vite会创建一个服务器来运行打包之后的文件
   preview:{
    port: 4000,//端口号
    host: 'localhost',
    open: true,//是否自动打开浏览器
},
  //开发配置  npm run dev
  server: {
    port: 7001,//端口号
    strictPort: true,//是否是严格的端口号，如果true，端口号被占用的情况下，vite会退出
    host: 'localhost',
    cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
    https: false,//是否支持http2 如果配置成true 会打开https://localhost:3001/xxx;
    open: true,//是否自动打开浏览器
    // 反向代理 跨域配置
    proxy: {
        '/api': {
            target: "https://xxxx.com/",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
  },

})
