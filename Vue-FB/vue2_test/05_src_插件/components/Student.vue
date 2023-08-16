<template>
  <div class="school">
      <h1 @click="showName">学生的姓名: {{stuName}}</h1>
      <h1 @click="showAge">学生的年龄:{{stuAge+1}}</h1>
  </div>
</template>

<script type="text/javascript">
import {mixin} from '../mixin';
export default {
  name: "Student",
  data() {
    return {
      stuName: "张三",
      stuAge: 23
    }
  },
  mixins:[mixin]

  }
</script>

<style lang="css" scoped>
 
</style>
