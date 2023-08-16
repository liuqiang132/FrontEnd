//引入Vue
import Vue from "vue";
//引入Vuex
import Vuex from 'vuex';

//使用插件
Vue.use(Vuex);

//创建actions---用于操作数据的行为
const actions = {
    // jia(context,value){
    //     context.commit("JIA",value);
    // },
    // jian(context,value){
    //     context.commit("JIAN",value);
    // },
    odd(context,value){
        if(context.state.sum % 2){
            context.commit("ODD",value);
        }
    },
    wait(context,value){
        setTimeout(()=>{
            context.commit("WAIT",value);
        },1000);
    },
};
//创建mutations---用于操作数据的行为
const mutations = {
    JIA(state,value){
        state.sum += value;
    },
    JIAN(state,value){
        state.sum -= value;
    },
    ODD(state,value){
        state.sum += value;
    },
    WAIT(state,value){
        state.sum += value; 
    },
    // 添加人员信息功能
    ADD_PERSON(state,personObj){
        console.log("mutations对象中的ADD_PERSON方法被调用了");
        state.personList.unshift(personObj);
    }

};
//创建state---用于操作数据的行为
const state = {
    sum:0,//当前的求和
    school: "尚硅谷",
    subject: "前端",
    personList: [
        {id:"001",name: "张三"}
    ]
};
// 准备getters---用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum *10;
    }
}
// 创建store并暴露出去
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
