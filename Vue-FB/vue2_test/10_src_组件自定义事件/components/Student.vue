<template>
  <div class="student">
    <h1>学生姓名:{{stuName}}</h1>
    <h1>学生年龄:{{stuAge}}</h1>
    <button @click="sendStudentName">点击尝试将学生姓名传递给App组件</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Student",
  data() {
    return {
      stuName: "张三",
      stuAge: 23,
    };
  },
  methods: {
    sendStudentName(){
      // 触发student实例身上的atguigu自定义事件
      this.$emit("atguigu",this.stuName,666,111);
      this.$emit('demo');
    },
    unbind(){
      // 解绑一个自定义事件
      // this.$off('atguigu');
      // 解绑多个自定义事件
      // this.$off(['atguigu','demo']);
      // 解绑所有的自定义事件
      this.$off();
    }
  },
};
</script>
<style lang="less" scoped>
.student {
  background-color: orange;
}
</style>
