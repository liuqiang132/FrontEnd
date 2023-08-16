<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://t7.baidu.com/it/u=2623038388,182457768&fm=193&f=GIF" alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
       <video slot="center" controls src="https://haokan.baidu.com/v?pd=wisenatural&vid=2972806872753571787"/>
       <!--template v-slot:footer vue官方推出最新的插槽的写法,前提条件是: 该方式必须在template标签中写才合适  -->
       <template v-slot:footer>
          <div class="videos">
           <a href="http://www.atguigu.com">经典</a>
           <a href="http://www.atguigu.com">热门</a>
           <a href="http://www.atguigu.com">悬疑</a>
          </div>
          <h4>欢迎前来观看</h4>
       </template>
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
  .container,.foot,.videos{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }

</style>