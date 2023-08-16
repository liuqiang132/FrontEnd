<template>
    <div>
        <button @click="isShow =!isShow">显示/隐藏</button>
        <h2 v-show="isShow" class="go">{{msg}}</h2> 
    </div>
</template>

<script>
export default {
    name: 'VueTest',
    data() {
        return {
            msg: "测试代码",
            isShow: true
        }
    },
   
};
</script>

<style lang="css" scoped>
    h2{
       background-color: orange ;
    }
    .come{
        animation: atguigu 1s;
    }
    .go{
        animation: ayguigu 1s;
    }
    
    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translate(0%);
        }
    }

</style>