<template>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 头部添加组件 -->
        <MyHeader :addToDo="addToDo"/>
        <!-- 列表组件 -->
        <MyList :items="todos" :changeToDoDone="changeToDoDone" :deleteToDos="deleteToDos"/>
        <!-- 底部組件 -->
        <MyFooter :todos="todos" :checkToDoAll="checkToDoAll" :clearAllToDos="clearAllToDos"/>
      </div>
    </div>
</template>

<script type="text/javascript">
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos:[
        {id:"001","title":"睡觉",done:true},
        {id:"002","title":"吃饭",done:false},
        {id:"003","title":"打豆豆",done:true},
        {id:"004","title":"上网",done:false},
        {id:"005","title":"聊天",done:true},
        {id:"006","title":"赚钱",done:false},
      ]
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
    deleteToDos(id){
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

    }

  },
};
</script>

<style lang="css" scoped>
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
