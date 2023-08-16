<template>
    <h3>当前求和为:{{sum}}</h3>
    <button @click="sum++">点击+1</button>
</template>
<script>

import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue'
export default {
    name: "MyDemo",
    //vue3中的新式组合式API
    setup() {
        console.log("---setup()---");
        let sum = ref(0);
        onBeforeMount(()=>{
            console.log("---onBeforeMount()---");
        }),
        onMounted(()=>{
            console.log("---onMounted()---");
        }),
        onBeforeUpdate(()=>{
            console.log("---onBeforeUpdate()---");
        }),
        onUpdated(()=>{
            console.log("---onUpdated()---");
        }),
        onBeforeUnmount(()=>{
            console.log("---onBeforeUnmount()---"); 
        }),
        onUnmounted(()=>{
            console.log("---onUnmounted()---");
        })

        return { sum };
    },
    //#region 
    // beforeCreate(){
    //     console.log("---beforeCreate---");
    // },
    // created(){
    //     console.log("---created---");
    // },
    // beforeMount(){
    //     console.log("---beforeMount---");
    // },
    // mounted(){
    //     console.log("---mounted---");
    // },
    // beforeUpdate(){
    //     console.log("---beforeUpdate---");
    // },
    // updated(){
    //     console.log("---updated---");
    // },
    // beforeUnmount(){
    //     console.log("---beforeUnmount---");
    // },
    // unmounted(){
    //     console.log("---unmounted---");
    // }
    //#endregion
}
</script>

<style>

</style>