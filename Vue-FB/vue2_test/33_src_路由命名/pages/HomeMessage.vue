<template>
    <div>
        <ul>
            <li v-for="message in MessageList" :key="message.id">
                <!-- 跳转路由 携带params参数  to的字符串写法-->
                <!-- <router-link :to="`/home/home-message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp; -->
                <!--跳转路由 携带params参数  to的对象写法  -->
                <router-link :to="{
                    // path:'/home/home-message/detail', //出现错误！！
                    name:'xiangqiang',
                    query:{
                        id:message.id,
                        title:message.title
                    }
                }">
                    {{message.title}}
                </router-link>
            </li>
        </ul>
        <hr/>
        <!-- 指定路由跳转的位置 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "HomeMessage",
    data(){
        return {
            MessageList:[
                {id:"001",title:"消息001"},
                {id:"002",title:"消息002"},
                {id:"003",title:"消息003"},
            ]
        }
    }
}
</script>

<style>

</style>