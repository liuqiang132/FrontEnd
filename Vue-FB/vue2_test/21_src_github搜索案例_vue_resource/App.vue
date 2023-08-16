<template>
  <div id="app">
  <div class="container">
     <Search/>
     <List/>
  </div>
</div>
</template>

<script>
  import Search from './components/Search.vue'
  import List from "./components/UserList.vue"
export default {
  name: "App",
  components: {Search,List}

}
</script>

<style lang="css" scoped>
</style>