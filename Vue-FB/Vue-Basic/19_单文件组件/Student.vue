<template>
  <div>
    <h2>学生姓名:{{ studentName }}</h2>
    <h2>学生年齡:{{ studentAge }}</h2>
    <button @click="showStuName()">点我获取学生信息</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Student",
  data() {
    return {
      studentName: "凌玉洁",
      studentAge: 23,
    };
  },
  methods: {
    showStuName() {
      alert(this.studentName);
    },
  },
};
</script>

<style lang="less" scoped>


</style>
