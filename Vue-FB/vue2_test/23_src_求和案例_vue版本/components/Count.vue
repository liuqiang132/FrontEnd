<template>
  <div>
    <h1>当前的求和为:{{sum}}</h1>
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
          sum:0,//当前的求和
          n:1,//自加数
        
        };
    },
    methods:{
      increment(){
        this.sum += this.n;
      },
      decrement(){
        this.sum -= this.n;
      },
      incrementOdd(){
        if(this.sum % 2){
          this.sum += this.n;
        }
      },
      incrementWait(){
        setTimeout(()=>{
          this.sum += this.n;
        },1000);
      },
    },

    };
</script>

<style lang="css" scoped>
  button{
    margin-left: 5px;
  }
</style>