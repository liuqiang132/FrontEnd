//求和相关的配置
export default  {
    namespaced:true, //开启命名空间
    actions:{
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
    },
    mutations:{
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
    },
    getters:{
        bigSum(state){
            return state.sum * 10;
        }
    },
    state:{
        sum:0,//当前的求和
        school: "尚硅谷",
        subject: "前端"
    }  
};