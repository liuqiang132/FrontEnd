//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import HomeNews from '../pages/HomeNews.vue'
import HomeMessage from '../pages/HomeMessage.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
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
                        path: "detail", 
                        component:Detail,
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
                        props({query:{id,title}}){
                            return {id:id,title:title}
                        }
                    }
                ]
            }
        ]
        }
    ]
})