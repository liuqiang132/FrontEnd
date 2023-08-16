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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前数为基数时再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>
<script>
    import { mapState,mapGetters } from 'vuex';
    export default {
    name: "Count",
    data() {
        return {
          n:1,//自加数
        };
    },
    computed:{
      //程序员自己写的计算属性:sum dahe  school subject
      // sum(){
      //   return this.$store.state.sum;
      // },
      // dahe(){
      //   return this.$store.state.sum * 10;
      // },
      // school(){
      //   return this.$store.state.school;
      // },
      // subject(){
      //   return this.$store.state.subject;
      // },
      


      // 借助napState生成计算属性: sum school subject (对象写法)
      // ...mapState({sum:'sum',school:'school',subject:'subject'}),
      
      
      // 借助napState生成计算属性: sum school subject (数组写法)
      ...mapState(['sum','school','subject']),
      

      /* *************************************************************/

      // 借助mapGetters生成计算属性: bigSum (对象写法)
      // ...mapGetters({bigSum:'bigSum'}),
      
      // 借助mapGetters生成计算属性: bigSum (数组写法)
      ...mapGetters(["bigSum"])

    },
    methods:{
      increment(){
        // this.$store.dispatch("jia",this.n);
        this.$store.commit("JIA",this.n);
       
      },
      decrement(){
        // this.$store.dispatch("jian",this.n);
        this.$store.commit("JIAN",this.n);
        
      },
      incrementOdd(){
        this.$store.dispatch("odd",this.n);
        
      },
      incrementWait(){
        this.$store.dispatch("wait",this.n);
      },
    },
    };
</script>

<style lang="css" scoped>
  button{
    margin-left: 5px;
  }
</style>