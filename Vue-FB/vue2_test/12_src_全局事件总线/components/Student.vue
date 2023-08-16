<template>
  <div class="student">
    <h1>学生姓名:{{stuName}}</h1>
    <h1>学生年龄:{{stuAge}}</h1>
    <button @click="sendStudentName">将学生名传递给school组件</button>
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
    // 绑定自定义事件hello
    sendStudentName(){
      this.$bus.$emit("hello",this.stuName);
    }
  },
  beforeDestroy() {
    // 解绑自定义事件hello
    this.$bus.$off("hello");
  },
};
</script>
<style lang="css" scoped>
 .student {
  background-color: orange;
 }
</style>
