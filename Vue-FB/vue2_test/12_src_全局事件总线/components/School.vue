<template>
  <div class="school">
      <h1>学校名称:{{SchoolName}}</h1>
      <h1>学校地址:{{SchoolAddress}}</h1>
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
  mounted() {
     this.$bus.$on("hello",(data)=>{
         console.log("我是school组件,收到了stundent组件的传过来的数据:",data);
     })
  },
}
</script>
<style lang="less" scoped>
.school{
    background-color: orchid;
}
</style>
