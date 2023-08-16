<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todo" @keyup.enter="add"/>
  </div>
</template>

<script type="text/javascript">
import {nanoid} from "nanoid"
export default {
  name: "MyHeader",
  data() {
    return {
      todo: ''
    }
  },
  methods: {
    add(){
      // 数据的校验！！
    if(!this.todo.trim()){
     return  alert("你的输入不能为空");
    }
      //将输入的数据封装成一个todos对象
      const todoobj = {id:nanoid(),title:this.todo,done:false}
      // 将封装好的数据传入App组件中
      this.$emit("addToDo",todoobj);
      // 清空输入框
      this.todo ="";
    }
  },
};
</script>

<style lang="css" scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
