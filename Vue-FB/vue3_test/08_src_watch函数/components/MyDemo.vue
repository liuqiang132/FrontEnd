<template>
    <h2>一个人的信息</h2>
    <h3>当前求和为:{{sum}}</h3>
    <button @click="sum++">点击+1</button>
    <hr/>
    <h3>msg的值为:{{msg}}</h3>
    <button @click="msg+='~'">修改信息</button>
    <hr/>
    <h3>姓名:{{person.name}}</h3>
    <h3>年龄:{{person.age}}</h3>
    <h3>薪资:{{person.job.j1.salary}}</h3>
   <button @click="person.name+='~'">修改姓名</button>
   <button @click="person.age++">增长年龄</button>
   <button @click="person.job.j1.salary++">涨薪</button>
</template>
<script>
    import { reactive, ref, watch} from 'vue'
    export default {
        name: "MyDemo",
        setup() {
            let sum = ref(0);
            let msg = ref("你好呀"); 

            let person = reactive({
                name: "张三",
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                }
            })

        // //监视方法 情况一: 监视ref所定义的一个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        //     console.log("sum已经变化了",newValue,oldValue);
        // },{immediate:true,deep:true}) //开启深度监视


        // //监视方法 情况二: 监视ref所定义的多个响应式数据
        // watch(["sum","msg"],(newValue,oldValue)=>{
        //     console.log("sum或者msg已经变化了",newValue,oldValue);
        // },{immediate:true,deep:true}) //开启深度监视

        /**
         * 情况三: 监视reactive所定义的一个响应式数据的全部属性
         *      1注意: 此处无法正确获取oldValue
         *      2注意: 强制开启了深度监视(deep配置无效)
         * 
         * 
         */
        // watch(person,(newValue,oldValue)=>{
        //     console.log("person变化了",newValue,oldValue);
        // },{deep:true})

        //情况四: 监视reactive所定义的一个响应式数据中的某个属性
        watch(()=>person.name,(newValue,oldValue)=>{
            console.log("person.age变化了",newValue,oldValue);
        })
        //情况五: 监视reactive所定义的一个响应式数据中的某些属性
        watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
            console.log("person.age变化了",newValue,oldValue);
        })

        //特殊情况
        watch(()=>person.job,(newValue,oldValue)=>{
            console.log("person.job变化了",newValue,oldValue);
        },{deep:true}) //此处deep生效

        return {sum,msg,person};
        }

    }
</script>

<style>

</style>