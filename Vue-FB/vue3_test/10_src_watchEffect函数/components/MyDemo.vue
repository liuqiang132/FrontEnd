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
    import { reactive, ref,watch,watchEffect} from 'vue'
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
           watch(sum,(newValue,oldValue)=>{
            console.log(newValue,oldValue);
           },{immediate:true ,deep:true})

        /**
         * watch的套路: 既要指明监视的属性,也要指明监视的回调
         * watchEffect的套路是：不用指明监视那个属性,监视的回调用到哪个属性,那就监视哪个属性
         * watchEffect有点像computed:
         *      但computed注重的计算出来的值(回调函数的返回值)所以必须要写返回值
         *      而watchEffect更注重的hi过程(回调函数的函数体)所以不用写返回值
         * 
         * 
         * 
         */
        watchEffect(()=>{
            const x = sum.value;
            const x1 = person.job.j1.salary;
            console.log("watchEffect所指定的回调执行了",x,x1);
        })
        return {sum,msg,person};
        }
    }
</script>

<style>

</style>