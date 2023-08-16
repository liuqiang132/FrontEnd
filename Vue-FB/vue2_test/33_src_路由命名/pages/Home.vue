<template>
    <div>
        <h2>Home组件内容</h2>
            <ul class="nav nav-tabs">
                <!-- vue中借助router-link标签实现路由的切换 -->
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/home-news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item " active-class="active" to="/home/home-message">Message</router-link>
                </li>
            </ul>
            <ul>
                <!-- 指定组件的呈现位置 -->
                <router-view></router-view>
            </ul>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style>

</style>