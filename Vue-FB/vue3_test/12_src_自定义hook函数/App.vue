<template>
  <button @click="isFull = !isFull">显示/隐藏</button>
  <MyDemo v-if="isFull"/>
</template>

<script>
import { ref } from '@vue/reactivity';
import MyDemo from './components/MyDemo.vue';
export default {
    name:"App",
    setup(){ 
      let isFull = ref(true); 
      return {isFull}
    },
    components: { MyDemo, }
}
</script>

<style>

</style>