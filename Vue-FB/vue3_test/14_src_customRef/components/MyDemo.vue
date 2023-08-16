<template>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>
<script>
import { customRef } from 'vue'
export default {
    name: "MyDemo",
    //vue3中的新式组合式API
    setup() {

        //使用自定义ref
        function MyRef(value) {
            return customRef(()=>{
                return {
                    get(){
                        return value;
                    },
                    set(){

                    }
                }
            });
        }
        // let keyWord = ref("hello"); //使用vue提供的ref
        let keyWord = MyRef("hello"); //自定义ref
        return {
            keyWord,
            MyRef

        };
    },
}
</script>
<style lang="css" scoped>

</style>