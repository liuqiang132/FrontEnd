<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :isAll="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成:{{ doneTotal }}</span> / 全部:{{ totals }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "MyFooter",
  props:["todos",],
  computed:{
    totals(){
      return this.todos.length;
    },
    doneTotal(){
      // 该方法的功能: 统计数据中的哪些已经做完成的事
    return this.todos.reduce((pre,todo)=>pre +(todo.done ? 1:0),0);
    },
    isAll:{
      get(){
          return this.doneTotal.done  === this.totals && this.totals > 0;
      },
      set(value){
        this.$emit("checkToDoAll",value);  
      }
    }
  },
  methods: {
    clearAll(){
      this.$emit("clearAllToDos");
    }
  },
  
};
</script>

<style lang="css" scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
