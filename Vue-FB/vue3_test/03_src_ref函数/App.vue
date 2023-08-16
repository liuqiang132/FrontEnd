<template>
  <h2>一个人的信息</h2>
  <h3>姓名:{{name}}</h3>
  <h3>年龄:{{age}}</h3>
  <h3>工作种类:{{job.type}}</h3>
  <h3>工作薪水:{{job.salary}}</h3>
  <button @click="changeInfo">修改一下人的信息</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',
    setup(){
      //数据
      let name =  ref("张三");
      let age = ref(18);
      let job = ref({
        type: "前端工程师",
        salary: "30k"
      });
      //方法
      function changeInfo(){
        name.value = "李四";
        age.value = 24;
        job.value.type = "后端工程师";
        job.value.salary = "40k";
        console.log(job.value);
      }
      return {name,age,job,changeInfo};
    }
  }
</script>

<style>
</style>
