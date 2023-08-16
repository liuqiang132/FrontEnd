
// 引入vue库
import Vue from 'vue'
//引入组件App.vue
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
//引入store
import store from './store'
//解决生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(vueResource);
new Vue({
  el:"#app",
  render: h=>h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});

