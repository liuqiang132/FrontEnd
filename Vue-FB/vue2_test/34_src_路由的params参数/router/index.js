//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import HomeNews from '../pages/HomeNews.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个一个路由器
export default new VueRouter({
    //配置路由规则
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component: About
        },
        {
            path:'/home',
            component:Home,
            //子路由配置规则
            children:[{
                path:'home-news',
                component:HomeNews
            },
            {
                path: "home-message",
                component:HomeMessage,
                children:[
                    {
                        name:"xiangqiang",
                        // params传递参数
                        path: "detail/:id/:title", //使用占位符声明接收参数
                        component:Detail,
                    }
                ]
            }
        ]
        }
    ]
})