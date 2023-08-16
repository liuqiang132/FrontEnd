<template>
  <div class="child">
    <h3>我是Mychild组件(子)</h3>
    <MySon/>
  </div>
</template>

<script>
  import MySon from './MySon.vue'
  export default {
      name:"MyChild",
      components:{MySon}

  }
</script>

<style lang="css" scoped>
 .child{
    background-color: orange;
    padding: 10px;
 }

</style>