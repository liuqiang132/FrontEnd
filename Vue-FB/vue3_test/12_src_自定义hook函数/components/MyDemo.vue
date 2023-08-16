<template>
    <h3>当前求和为:{{sum}}</h3>
    <button @click="sum++">点击+1</button>
    <hr />
    <h3>点击获取鼠标的坐标 x坐标:{{point.x}} y坐标:{{point.y}}</h3>
</template>
<script>
import {  ref } from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    name: "MyDemo",
    //vue3中的新式组合式API
    setup() {
        let sum = ref(0);
        //调用usePoint的hook函数
       let point =  usePoint();
        return { sum ,point};
    },
}
</script>

<style>

</style>