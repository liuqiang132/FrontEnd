import Vue from 'vue'
import App from './App.vue'

// 引入插件
import vueResource from 'vue-resource'
//解决生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(vueResource);
new Vue({
  el:"#app",
  render: h=>h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});
