<template>
  <div>
    <h1>当前的求和为:{{sum}}</h1>
    <h2>当前的求和放大十倍为:{{bigSum}}</h2>
    <h2>我在{{school}},学习{{subject}}</h2>
    <h2 style="color: rebeccapurple;">从person组件中获取的人员总数为:{{personList.length}}</h2>
    <select v-model.number="n">
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前数为基数时再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>
<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
    export default {
    name: "Count",
    data() {
        return {
          n:1,//自加数
        };
    },
    computed:{

      // 借助napState生成计算属性: sum school subject (数组写法)
      ...mapState("countAbout",['sum','school','subject']),
      ...mapState("personAbout",["personList"]),
      
      // 借助mapGetters生成计算属性: bigSum (数组写法)
      ...mapGetters("countAbout",["bigSum"])
    },
    methods:{
      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
      ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

      //借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions(对象写法)
      ...mapActions('countAbout',{incrementOdd:"odd",incrementWait:"wait"}),
    },
    mounted(){
      console.log(this.$store);
    }
    };
</script>

<style lang="css" scoped>
  button{
    margin-left: 5px;
  }
</style>