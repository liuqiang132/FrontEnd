//引入Vue
import Vue from "vue";
//引入Vuex
import Vuex from 'vuex';

//引入countOptions
import countOptions from './count';
//引入personOptions
import personOptions from './person'
//使用插件
Vue.use(Vuex);

// 创建store并暴露出去
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }   
});
