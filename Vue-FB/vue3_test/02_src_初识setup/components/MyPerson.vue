<template>
  <h1>我是App组件</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
 <button @click="show">说话</button>
  
</template>

<script>
export default {
    name:"MyPerson",
    // setup(){
    //   let name = "张三"
    //   let age = 23
    //   function show() {
    //     alert(`我叫${name}年龄${age}`)
        
    //   }
    //   return {
    //     name,age,show
    //   }
        
    // }
    data(){
      return {
        name:"李四",
        age: 34
      }
    },
    methods:{
      show(){
        alert(`我是${this.name},年龄${this.age}`);
      }
    }
}
</script>

<style>

</style>