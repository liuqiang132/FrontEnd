<template>
  <div>
    <h1>当前的求和为:{{$store.state.sum}}</h1>
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
    export default {
    name: "Count",
    data() {
        return {
          n:1,//自加数
        };
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