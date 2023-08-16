<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script type="text/javascript">
import School from './School.vue'
import Student from './Student.vue'
export default {
  name: "App",
  components: {
      School,
      Student
  }
}
</script>

<style lang="less" scoped>


</style>
