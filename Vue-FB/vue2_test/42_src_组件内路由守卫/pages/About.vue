<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: "About",
    mounted() {
        console.log(this.$router);
    },
    // 通过路由规则,进入该组件时被调用
    beforeEnter(to, from, next) {
        if (!to.meta.isAuth) {
            //放行
            next();
        } else {
            alert("权限不足不能查看！！！");
        }

    },
    // 通过路由规则,离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log("beforeRouteLeave",to,from);
        //放行
        next();

    }
}
</script>

<style>

</style>