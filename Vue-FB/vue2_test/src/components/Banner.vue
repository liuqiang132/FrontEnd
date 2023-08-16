<template>
   <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button  @click="back">后退</button>
        <button @click="forward">前进</button>&nbsp;&nbsp;&nbsp;
        <button @click="test">测试一下go</button>
   </div>
</template>

<script>
    export default {
        name:"Banner",
        methods:{
            back(){
                //后退
                this.$router.back();
                console.log(this.$router);
            },
            forward(){
                //前进
                this.$router.forward();  
            },
            test(){
                //
                this.$router.go(3);
            }
        }

    }
</script>

<style>

</style>