<template>
    <h2>一个人的信息</h2>
    <h3>姓名:{{person.name}}</h3>
    <h3>年龄:{{person.age}}</h3>
    <slot></slot>
    <button @click="show">点击测试一次demo</button>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name: "MyDemo",
        // beforeCreate(){
        //   console.log('-----beforeCreate-----');
        // },
        props:['msg','school'],
        /**
         *  setup中的参数:
         *       props: 值为对象,包含:组件外部传递过来,切组件内部声明接收了的属性
         *       context: 上下文对象:
         *               attrs: 值为对象,包含：组件外部传递过里啊,但内有props配置中声明的属性,相当于this.$attrs
         *               emit: 分发自定义时间的函数,相当于this.$emit  
         *               slots: 收到的插槽内容: 相当于this.$slots
         * 
         */
        setup(prpos,context) {
        // console.log('------setup()-----',this);
        // console.log(prpos);
        console.log("上下文对象context",context.attrs);
        console.log("上下文对象context",context.emit);
        console.log("上下文对象context",context.slots);
            let person = reactive({
                name:"张三",
                age:23
            });
        //方法
        function show(){
            context.emit("hello",666);

        }
        return {person,show};
        }

    }
</script>

<style>

</style>