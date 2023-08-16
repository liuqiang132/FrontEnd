
// 引入vue库
import Vue from 'vue'
//引入组件App.vue
import App from './App.vue'
//引入插件vue-router
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//解决生产提示
Vue.config.productionTip = false;
//使用插件VueRouter
Vue.use(VueRouter);
new Vue({
  el:"#app",
  render: h=>h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});

