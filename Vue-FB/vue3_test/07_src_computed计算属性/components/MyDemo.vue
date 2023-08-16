<template>
    <h2>一个人的信息</h2>
    姓: <input type="text" v-model="person.firstName"><br/>
    名: <input type="text" v-model="person.lastName"><br/>
    全名: <span>{{person.fullName}}</span><br/>
    全名: <input type="text" v-model="person.fullName"><br/>
</template>

<script>
    import {reactive,computed} from 'vue'
    export default {
        name: "MyDemo",
        //vue2中的计算属性的写法
        // computed:{
        //     fullName(){
        //         return this.person.firstName+"-"+this.person.lastName;
        //     }
        // },
        setup() {
            let person = reactive({
                firstName:"张",
                lastName:"三"
            });
        //计算属性---简写形式(没有考虑数据的修改情况)
        // person.fullName = computed(()=>{
        //     return person.firstName+"-"+person.lastName;
        // }) 

        //计算属性---完整写法()
        person.fullName = computed({
            set(value){
                const sps = value.split('-');
                person.firstName = sps[0]; 
                person.lastName = sps[1];
            },
            get(){
                return person.firstName+"-"+person.lastName;
            }
        })
        return {person};
        }

    }
</script>

<style>

</style>