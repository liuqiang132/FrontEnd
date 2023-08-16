<template>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 头部添加组件 -->
        <MyHeader @addToDo="addToDo"/>
        <!-- 列表组件 -->
        <MyList :items="todos"/>
        <!-- 底部組件 -->
        <MyFooter :todos="todos"/>
      </div>
    </div>
</template>
<script type="text/javascript">
import pubsub from 'pubsub-js'
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import { json } from 'body-parser';
export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      // 从本地获取数据
      todos:JSON.parse(localStorage.getItem("todos")) || [],
    }
  },
  methods: {
    // 添加todos对象
    addToDo(todoObj){
      this.todos.unshift(todoObj);
    },
    // 取消勾选/勾选功能的实现
    changeToDoDone(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id)  todo.done = !todo.done;
      })
    },
    // 删除一个todo对象
    deleteToDos(_,id){
     this.todos =  this.todos.filter(todo =>todo.id !== id);
    },
    // 取消全部勾选 or 全部勾选
    checkToDoAll(done){
        this.todos.forEach((todo)=>{
          todo.done = done;  
        })
    },
    //清除已经完成的done值为真的todos
    clearAllToDos(){
     this.todos = this.todos.filter((item) => {
        return !item.done;
      });
    },
    //更新一个todos
    updateToDos(id,title){
      this.todos.forEach((todo)=>{
         if(todo.id === id) todo.title = title;
      })
    
    }
  },
  // 将数据存入本地
  watch:{
    todos:{
      //开启深度监视
      deep:true,
       handler(value){
         localStorage.setItem("todos",JSON.stringify(value));
       }
    }
  },
  mounted() {
    // 绑定全局事件总线
    this.$bus.$on("changeToDoDone",this.changeToDoDone);
    this.$bus.$on("checkToDoAll",this.checkToDoAll);
    this.$bus.$on("clearAllToDos",this.clearAllToDos);

    // 编辑
    this.$bus.$on("updateToDos",this.updateToDos);
    // this.$bus.$on("deleteToDos",this.deleteToDos);
    // 使用消息订阅与发布
    this.pubId = pubsub.subscribe("deleteToDo",this.deleteToDos) 
  },
  beforeDestroy() {
    // 解绑全局事件总线
    this.$bus.$off(["changeToDoDone","updateToDos"]);
    //解除消息订阅与发布
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style lang="css">
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #26b310;
  border: 1px solid #bdb3b3;
  margin-right: 8px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
