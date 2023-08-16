<template>
  <div class="student">
    <h1 @click="showName">学生的姓名: {{ stuName }}</h1>
    <h1 class="atguigu" @click="showAge">学生的年龄:{{ stuAge + 1 }}</h1>
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
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
  .atguigu{
    font-size: 40px;
  }
}
</style>
