<template>
  <h2>一个人的信息</h2>
  <h3>姓名:{{person.name}}</h3>
  <h3>年龄:{{person.age}}</h3>
  <h3>工作种类:{{person.job.type}}</h3>
  <h3>工作薪水:{{person.job.salary}}</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <button @click="changeInfo">修改一下人的信息</button>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: 'App',
    setup(){
      /**
       * reactive函数
       *  作用: 定义一个对象类型的响应式数据(基本类型不要用它,要用ref函数)
       *  语法: const 代理对象 = reactive(源对象)接收一个对象（数组) 返回一个代理对象(proxy对象)
       *  reactive定义的响应式数据时"深层次的"
       *  内部基于ES6的proxy实现,通过代理对象操作源对象内部数据进行操作
       */
      //数据
      let person = reactive({
         name: "张三",
         age:18,
         job:{
          type: "前端工程师",
          salary: "40k",
          a:{
            b:{
              c:666
            }
          }
         },
         hobby:["抽烟","喝酒","烫头"]
      });
    
      //方法
      function changeInfo(){
        person.name = "李四";
        person.age = 24;
        person.job.type = "后端工程师";
        person.job.salary = "50k"
        console.log(person);
        person.job.a.b.c = 666;
        person.hobby[0] = "学习"
      }
      return {person,changeInfo};
    }
  }
</script>

<style>
</style>
