<template>
  <li>
    <label>
      <input type="checkbox" :checked="items.done" @change="changeDone(items.id)"/>
      <!-- 如下代码也能实现功能,但是不太推荐,因为有点违法规则,因为修改了props -->
      <!-- <input type="checkbox" v-model="items.done"/> -->
      <span>{{ items.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteToDo(items.id)">删除</button>
  </li>
</template>

<script type="text/javascript">
export default {
  name: "MyItem",
  props: ["items",],
  methods: {
    //实现勾选或者取消勾选功能
    changeDone(id) {
      // this.changeToDoDone(id);
      this.$bus.$emit("changeToDoDone",id);
    },
    // 删除一个todo对象
    deleteToDo(id) {
      if (confirm("你确定严删除吗?")) {
        // this.deleteToDos(id);
        this.$bus.$emit("deleteToDos",id);
      }
    },
  },
};
</script>

<style lang="css" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>
