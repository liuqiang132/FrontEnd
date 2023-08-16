<template>
 <div class="app">
  <h3>我是App组件(祖)</h3>
 </div>
</template>
<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref} from 'vue'
export default {
    name:"App",
    components: {  },
    setup(){
      let car = reactive({ name:"奔驰",price:"40w"})
      let sum = ref(0) 
      let car2 = readonly(car);
      /**
       *  isRef: 检查一个值是否为一个ref对象
       *  isReactive: 检查一个对象是否时由reative创建的响应式代理
       *  isReaonly: 检查一个对象是否时由redonly创建的只读代理
       *  isProxy: 检查有个对象是否时由reative或者readonly方法创建的代理
       * 
       * 
       * 
       */
      console.log(isRef(sum));
      console.log(isReactive(car));
      console.log(isReadonly(car2));
      console.log(isProxy(car));

      return {car,sum,car2};

    }
}
</script>

<style lang="css" scoped>
.app{
  background-color: palevioletred;
  padding: 10px;
}

</style>