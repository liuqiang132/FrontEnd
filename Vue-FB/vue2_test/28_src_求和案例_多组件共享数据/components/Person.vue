<template>
  <div>
    <h1 style="color: red;">从Count组件获取到的求和为:{{sum}}</h1>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="person in personList" :key="person.id">--->{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    export default {
      name: "Person",
      data(){
        return {
            name:'',
        }
      },
      computed:{
        //计算属性:人员的列表
        personList(){
            return this.$store.state.personList;
        },
        //获取求和为
        sum(){
            return this.$store.state.sum;
        } 
   },
   methods:{
    // 实现添加功能
    add(){
        const personObj = {id:nanoid(),name:this.name};
         this.$store.commit("ADD_PERSON",personObj);
         this.name= "";
    }
   }
   }
</script>

<style lang="css" scoped>

</style>