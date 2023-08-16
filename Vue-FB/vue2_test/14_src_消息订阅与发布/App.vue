<template>
  <div>
    <h2>{{msg}}</h2>
    <School/>
    <hr/>
    <Student/>
  </div>
</template>

<script type="text/javascript">
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "你好呀！",
    }
  },
  components: {
    Student,
    School,
  },
  
};
</script>

<style lang="less" scoped>
</style>
