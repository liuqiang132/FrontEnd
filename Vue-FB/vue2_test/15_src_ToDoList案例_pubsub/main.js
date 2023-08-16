import Vue from 'vue'
import App from './App.vue'

//解决生产提示
Vue.config.productionTip = false;
new Vue({
  el:"#app",
  render: h=>h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});
