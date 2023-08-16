<template>
  <ul class="todo-main">
    <!-- 列表組件 -->
    <MyItem  v-for="todoobj in items" :key="todoobj.id" :items="todoobj" />
  </ul>
</template>

<script type="text/javascript">
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  props:["items",]
};
</script>
<style lang="css" scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid rgb(171, 25, 25);
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
