<template>
  <div class="school">
      <h1>学校名称:{{SchoolName}}</h1>
      <h1>学校地址:{{SchoolAddress}}</h1>
  </div>
</template>

<script type="text/javascript">
import pubsub from 'pubsub-js'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
        SchoolName: "尚硅谷",
        SchoolAddress: "陕西省西安市草滩六路"
    }
  },
  mounted() {
    // 使用全局事件总线实现
    //  this.$bus.$on("hello",(data)=>{
    //      console.log("我是school组件,收到了stundent组件的传过来的数据:",data);
    //  })

    // 订阅消息
   this.pubId = pubsub.subscribe("hello",(name,data)=>{
     console.log(this);
      console.log("有人订阅了hello消息,hello消息被执行了",name,data);
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
    
  },
}
</script>
<style lang="less" scoped>
.school{
    background-color: orchid;
}
</style>
