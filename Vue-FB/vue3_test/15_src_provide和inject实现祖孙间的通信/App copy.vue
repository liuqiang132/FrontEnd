<template>
 <div class="app">
  <h3>我是App组件(祖)-----数据:   汽车的名称:{{car.name}}，汽车的价格:{{car.price}}</h3>
  <MyChild/>
 </div>
</template>

<script>
import {provide, reactive} from 'vue'
import MyChild from './components/MyChild.vue'
export default {
    name:"App",
    components: { MyChild },
    setup(){
      let car = reactive({ name:"奔驰",price:"40w"})

      //提供数据
     provide("car",car);

      return {car};

    }
}
</script>

<style lang="css" scoped>
.app{
  background-color: palevioletred;
  padding: 10px;
}

</style>