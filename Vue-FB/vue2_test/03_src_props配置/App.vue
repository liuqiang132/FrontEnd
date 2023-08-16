<template>
  <div>
   <Student stuName="李四" stuSex="男" :stuAge="18"/>
   <hr/>
  </div>
</template>

<script type="text/javascript">
import Student from './components/Student.vue'
export default {
  name: "App",
  components: {
    Student,
  },
};
</script>

<style lang="less" scoped>
</style>
