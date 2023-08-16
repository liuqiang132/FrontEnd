//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import HomeNews from '../pages/HomeNews.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router = new VueRouter({
    //配置路由规则
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {isAuth: true,title: "关于" }
        },
        {
            path: '/home',
            component: Home,
            meta: { title: "主页" },
            //子路由配置规则
            children: [{
                path: 'home-news',
                component: HomeNews,
                meta: { isAuth: true, title: "新闻" },
                // 独享路由守卫
                // beforeEnter: (to, from, next) => {
                //     if (!to.meta.isAuth) {
                //         //放行
                //         next();
                //     } else {
                //         alert("权限不足不能查看！！！");
                //     }

                // }
            },
            {
                path: "home-message",
                component: HomeMessage,
                meta: { isAuth: true, title: "消息" },
                children: [
                    {
                        name: "xiangqiang",
                        path: "detail",
                        component: Detail,
                        meta: { title: "详情" },
                        //props的第一种写法: 值为对象,
                        // props:{
                        //     a:1,
                        //     b:"hello"
                        // }
                        // //props的第二种写法: 值为布尔值 如果值为true则将params中的所有参数以props的方式传递给Detail组件
                        // props:true,
                        //props的第三种写法: 值为函数
                        // props($route){
                        //     return {id:$route.query.id,title:$route.query.title}
                        // },
                        // 结构赋值的写法
                        props({ query: { id, title } }) {
                            return { id: id, title: title }
                        }
                    }
                ]
            }
            ]
        }
    ]
});
// 全局前置路由守卫-初始化的时候被调用,每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     console.log("全局前置路由守卫",to,from);
//     if(!to.meta.isAuth){
//         //放行
//         next();
//     }else{
//         alert("权限不足不能查看！！！");
//     }
// });
//全局后置路由守卫-初始化的时候被调用,每次路由切换之后被调用
// router.afterEach((to,from)=>{
//     console.log("全局后置路由守卫",to,from);
//     document.title = to.meta.title || "格子桌面系统";
// });
export default router;