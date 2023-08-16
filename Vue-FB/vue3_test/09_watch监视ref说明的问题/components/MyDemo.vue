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
    import { ref,watch} from 'vue'
    export default {
        name: "MyDemo",
        setup() {
            let sum = ref(0);
            let msg = ref("你好呀"); 
            let person = ref({
                name: "张三",
                age:18,
                job:{
                    j1:{
                        salary:20
                    }
                }
            })
            watch(sum,(newValue,oldValue)=>{
                console.log("sum变化了",newValue,oldValue);
            })
            watch(person,(newValue,oldValue)=>{
                console.log("person变化了",newValue,oldValue);
            },{deep:true})
        
        return {sum,msg,person};
        }
    }
</script>

<style>

</style>