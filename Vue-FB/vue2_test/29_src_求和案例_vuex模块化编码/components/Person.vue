<template>
  <div>
    <h1 style="color: red;">从Count组件获取到的求和为:{{sum}}</h1>
    <h2 style="color: green;">人员列表的第一个人为:{{fistPersonName}}</h2>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addPersonWang">添加一个人，名字以王开头</button>
    <ol>
        <li v-for="person in personList" :key="person.id">--->{{person.name}}</li>
    </ol>
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
    //实际的功能是: 从vuex状态中中读取数据
      computed:{
        //计算属性:人员的列表
        personList(){
            return this.$store.state.personAbout.personList;
        },
        //获取求和为
        sum(){
            return this.$store.state.countAbout.sum;
        },
        fistPersonName(){
          return this.$store.getters["personAbout/firstPersonName"];
        } 
   },
   //实际功能是: 往vuex中写入数据
   methods:{
    // 实现添加功能
    add(){
        const personObj = {id:nanoid(),name:this.name};
        if(this.name ==='') return alert("你的输入为空");
        this.$store.commit("personAbout/ADD_PERSON",personObj); 
        this.name= "";    
    },
    addPersonWang(){
      const personObj = {id:nanoid(),name:this.name};
      if(this.name ==='') return alert("你的输入为空");
      this.$store.dispatch("personAbout/addPersonWang",personObj);
      this.name= ""; 

    }
   }
   }
</script>
<style lang="css" scoped>

</style>