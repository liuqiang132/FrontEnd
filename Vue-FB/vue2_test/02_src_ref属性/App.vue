<template>
  <div>
   <h1 v-text="msg" ref="title"></h1>
   <button ref="btn" @click="showDom()">点我输出上方的dom元素</button>
    <School ref="sch"/>
  </div>
</template>

<script type="text/javascript">
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
  data() {
      return {
          msg: "欢迎来尚硅谷学习Vue"
      }
  },
  methods: {
      showDom(){
          console.log(this.$refs.title); //真实DOM元素
          console.log(this.$refs.btn);  //真实DOM元素
          console.log(this.$refs.sch); //school组件的实例对象(vc)
      }
  },
};
</script>

<style lang="less" scoped>
</style>
