<template>
  <div class="school">

      <h1>{{msg}}</h1>
      <h1>学生的姓名: {{stuName}}</h1>
      <h1>学生的性别:{{stuSex}}</h1>
      <h1>学生的年龄:{{myAge+1}}</h1>
      <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Student",
  data() {
    return {
      msg: "我是尚硅谷的一名学生",
      // 将props中的数据接受到data中
      myAge:this.stuAge,
    }
  },
  methods: {
    updateAge(){
       this.myAge++;
    }
  },
  // 第一种简单传递参数的方式: props:["stuName","stuSex","stuAge"]
  props:["stuName","stuSex","stuAge"]

  // 第二种限制类型传递参数的方式: 
  // props:{
  //   stuName:String,
  //   stuSex:String,
  //   stuAge:Number
  // }

  //第三种接受参数的方法: 限制类型，限制条件,使用默认值
  // props:{
  //   stuName:{
  //     type:String, //限制name的类型为字符串
  //     required: true, //设置该属性必须传
  //   },
  //   stuSex:{
  //     type:String, //限制sex的类型为字符串
  //     required: true, //设置该属性必须传

  //   },
  //   stuAge:{
  //     type: Number,//限制age的类型为字符串
  //     default: 100 //设置的默认值为99
  //   }
  }
</script>

<style lang="css" scoped>
 
</style>
