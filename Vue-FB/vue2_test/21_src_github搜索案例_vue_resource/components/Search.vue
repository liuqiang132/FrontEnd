<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">搜索github用户</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求成功前的展示
      this.$bus.$emit("getUsers", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // 请求成功时的数据展示
          this.$bus.$emit("getUsers", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          // 请求失败时的展示,清空users中残留的数据
          this.$bus.$emit("getUsers", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style lang="css" scoped>
</style>