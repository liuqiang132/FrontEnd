<template>
  <div class="container">
    <Category title="游戏">
      <template scope={games}>
        <ul>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>


    <Category title="游戏">
      <template scope={games}>
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>


    <Category title="游戏">
        <template scope={games}>
          <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
</div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
  name: "App",
  components: {Category}, 
  }
</script>

<style lang="css" scoped>
  .container,.foot,.videos{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }

</style>