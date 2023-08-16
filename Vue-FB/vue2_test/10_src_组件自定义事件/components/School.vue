<template>
  <div class="school">
      <h1>学校名称:{{SchoolName}}</h1>
      <h1>学校地址:{{SchoolAddress}}</h1>
      <button @click="sendSchoolName">点击尝试将学校名称传递给App组件</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "School",
  data() {
    return {
        SchoolName: "尚硅谷",
        SchoolAddress: "陕西省西安市草滩六路"
    }
  },
  props:["getSchoolName"],
  methods: {
      sendSchoolName(){
          this.getSchoolName(this.SchoolName);
      }
  },
}
</script>

<style lang="less" scoped>
.school{
    background-color: orchid;
}
</style>
