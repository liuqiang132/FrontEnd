<template>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>
<script>
export default {
    name: "HomeNews",
    // beforeDestroy(){
    //     console.log("homeNews组件即将被销毁了");
    // }
    activated(){
         console.log("news组件被激活了");
    },
    deactivated(){
        console.log("news组件失活了");
    }
}
</script>

<style>

</style>