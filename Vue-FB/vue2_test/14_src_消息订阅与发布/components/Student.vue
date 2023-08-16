<template>
  <div class="student">
    <h1>学生姓名:{{stuName}}</h1>
    <h1>学生年龄:{{stuAge}}</h1>
    <button @click="sendStudentName">将学生名传递给school组件</button>
  </div>
</template>

<script type="text/javascript">
import pubsub from 'pubsub-js'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      stuName: "张三",
      stuAge: 23,
    };
  },
  methods: {
    sendStudentName(){

     //发布消息
    pubsub.publish("hello",6666);

    }
    
  },
  
};
</script>
<style lang="less" scoped>
.student {
  background-color: orange;
}
</style>
