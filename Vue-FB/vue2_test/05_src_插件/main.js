import Vue from 'vue'
import App from './App.vue'
// 引入插件
import plugins from './plugins'

//解决生产提示
Vue.config.productionTip = false;

//使用插件
Vue.use(plugins);

new Vue({
  render: h=>h(App)
  
}).$mount("#app");
