<template>
  <li>
    <label>
      <input type="checkbox" :checked="items.done" @change="changeDone(items.id)"/>
      <!-- 如下代码也能实现功能,但是不太推荐,因为有点违法规则,因为修改了props -->
      <!-- <input type="checkbox" v-model="items.done"/> -->
      <span v-show="!items.isEdit">{{ items.title}}</span>
      <input 
        v-show="items.isEdit" 
        type="text" 
        :value="items.title" 
        @blur="handleBlur(items,$event)"
        ref="inputTitle"/>
    </label>
    <button class="btn btn-danger" @click="deleteToDo(items.id)">删除</button>
    <button v-show="!items.isEdit" class="btn btn-edit" @click="editToDo(items)">编辑</button>
  </li>
</template>
<script type="text/javascript">
import pubsub from 'pubsub-js'
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
        // this.$bus.$emit("deleteToDos",id);
        //发布消息
        pubsub.publish("deleteToDo",id); 
      }
    },
    //编辑
    editToDo(todos){
      if(todos.hasOwnProperty("isEdit")){
        todos.isEdit = true;
      }else{
        this.$set(todos,"isEdit",true);
      }

      //第一种方式: 使用定时器
      // setTimeout(()=>{
      //   this.$refs.inputTitle.focus();
      // },1000);

      //第二种方式: $nextTick
      this.$nextTick(function(){
        this.$refs.inputTitle.focus();
      })
    },
    //鼠标失去及焦点时的
    handleBlur(todos,e){
      todos.isEdit = false;
      if(!e.target.value.trim()) return alert("输入不能为空！！");
      this.$bus.$emit("updateToDos",todos.id,e.target.value);

    }
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
