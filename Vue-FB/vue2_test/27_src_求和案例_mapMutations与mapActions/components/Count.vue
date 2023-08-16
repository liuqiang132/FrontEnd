<template>
  <div>
    <h1>当前的求和为:{{sum}}</h1>
    <h2>当前的求和放大十倍为:{{bigSum}}</h2>
    <h2>我在{{school}},学习{{subject}}</h2>
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
    
      // 借助napState生成计算属性: sum school subject (对象写法)
      // ...mapState({sum:'sum',school:'school',subject:'subject'}),
      
      
      // 借助napState生成计算属性: sum school subject (数组写法)
      ...mapState(['sum','school','subject']),
      
      // 借助mapGetters生成计算属性: bigSum (对象写法)
      // ...mapGetters({bigSum:'bigSum'}),
      
      // 借助mapGetters生成计算属性: bigSum (数组写法)
      ...mapGetters(["bigSum"])

    },
    methods:{

      //程序员自己亲自写方法
      // increment(){
      //   // this.$store.dispatch("jia",this.n);
      //   this.$store.commit("JIA",this.n);
       
      // },
      // decrement(){
      //   // this.$store.dispatch("jian",this.n);
      //   this.$store.commit("JIAN",this.n);
        
      // },


      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),

      //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
      // ...mapMutations(["JIA","JIAN"]),


      //程序员自己亲自写方法
      // incrementOdd(){
      //   this.$store.dispatch("odd",this.n);
        
      // },
      // incrementWait(){
      //   this.$store.dispatch("wait",this.n);
      // },

      //借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions(对象写法)
      ...mapActions({incrementOdd:"odd",incrementWait:"wait"}),

      //借助mapActions生成对应的方法，方法中会调用dispatch去联系mapActions(数组写法)
      // ...mapActions(["odd","wait"])
    },
    };
</script>

<style lang="css" scoped>
  button{
    margin-left: 5px;
  }
</style>