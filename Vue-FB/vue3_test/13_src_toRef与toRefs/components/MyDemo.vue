<template>
    <!-- <h3>{{person}}</h3> -->
    <h3>姓名:{{person.name}}</h3>
    <h3>年龄:{{person.age}}</h3>
    <h3>薪资:{{person.job.j1.salary}}k</h3>
   <button @click="person.name+='~'">修改姓名</button>
   <button @click="person.age++">增长年龄</button>
   <button @click="person.job.j1.salary++">涨薪</button>
</template>
<script>
    import {reactive,toRefs} from 'vue'
    export default {
        name: "MyDemo",
        //vue3中的新式组合式API
        setup() {
            let person = reactive({
                    name: "张三",
                    age:18,
                    job:{
                        j1:{
                            salary:20
                        }
                    }
                })
        
                /**
                 *  toRef函数
                 *      作用: 创建一个ref对象,其value值指向另一个对象中的某个属性
                 *      语法: const name = toRef(person,'name')
                 *      应用: 要将响应式对象中的某个属性单独提供给外部使用时
                 *      扩展: toRef和toRefs功能一致,但可以批量创建多个对象,语法: toRefs(person)
                 */
            return {
                person,
                // name:toRef(person,"name"),
                // age:toRef(person,"age"),
                // salary:toRef(person.job.j1,"salary")
                ...toRefs(person)
            };
        },
    }
</script>
<style lang="css" scoped>
</style>