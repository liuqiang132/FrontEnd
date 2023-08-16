<template>
  <div class="son">
    <h3>我是MySon组件(孙) {{car.name}}---{{car.price}}</h3>
  </div>
</template>

<script>
  import {inject} from 'vue'
  export default {
      name:"MySon",
      setup(){
          let car = inject("car"); 
          return {car}
      }
  }
</script>

<style lang="css" scoped>
.son{
    background-color: green;
    padding: 10px;
}

</style>