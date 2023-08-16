//人员信息相关的配置
import axios from "axios";
import { nanoid } from "nanoid";
export default {
    namespaced:true, //开启命名空间
    actions:{
        //添加的人名限制为以王开头
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit("ADD_PERSON",value)
            }else{
                alert("请输入一个姓王的人名");
            }
        },
        //联系后端接口
        addPersonServer(context){
            axios.get("https://121.41.11.47:8848/nacos").then((response)=>{
                context.commit("ADD_PERSON",{id:nanoid(),name:response.data});
            },(error)=>{
                alert(error.message);
            });
        }
    },
    mutations:{
         // 添加人员信息功能
        ADD_PERSON(state,personObj){
            console.log("mutations对象中的ADD_PERSON方法被调用了");
            state.personList.unshift(personObj);
        }
    },
    state:{
        personList: [
            {id:"001",name: "张三"}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name;
        }
    }
};
