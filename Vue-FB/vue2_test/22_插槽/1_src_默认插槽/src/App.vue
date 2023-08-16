<template>
  <div class="container">
    <Category title="美食">
      <img src="https://t7.baidu.com/it/u=2623038388,182457768&fm=193&f=GIF" alt="">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
       <video controls src="https://haokan.baidu.com/v?pd=wisenatural&vid=2972806872753571787"/>
    </Category>
</div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
  name: "App",
  components: {Category},
  data(){
    return {
      food:["火锅","烧烤","小龙虾","牛排"],
      games:["红色警戒","穿越火线","劲舞团","超级玛丽"],
      films:["教父","拆弹专家","你好李焕英","我不是药神"]

    }
  },
  
  }
</script>

<style lang="css" scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>