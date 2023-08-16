<template>
  <div class="demo">
    <h2>学校名称:{{ schoolName }}</h2>
    <h2>学校地址:{{ schoolAddress }}</h2>
  </div>
</template>

<script>
export default {
  // 组件的相互交互
  name:"School",
  data() {
    return {
      schoolName: "尚硅谷",
      schoolAddress: "北京昌平",
    }
  },
  methods: {
    show(){
      alert(this.schoolName+","+this.schoolAddress);
    }
  },
  
};
</script>

<style scoped>
/* 组件的样式 */
.demo{
    background-color:  orange;
}
</style>