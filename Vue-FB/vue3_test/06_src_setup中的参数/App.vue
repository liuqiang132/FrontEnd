<template>
 <MyDemo @hello="showHello" msg="你好呀" school="尚硅谷">
   <span>尚硅谷</span>
 </MyDemo>
</template>

<script>
  import MyDemo from './components/MyDemo.vue'
  export default {
    name: 'App',
    components:{MyDemo},
    setup(){
      function showHello(value){
        alert("我是App组件我收到了MyDemo组件传递过来的参数",value)
      }
      return {showHello};
    }
  
  }
</script>

<style>
</style>
