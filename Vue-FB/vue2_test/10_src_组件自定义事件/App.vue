<template>
  <div>
    <h2>{{msg}},学生:{{studentName}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一方式使用@或者v-on)-->
    <!-- <Student v-on:atguigu="getStudentName" /> -->
    <!-- <Student @atguigu.once="getStudentName" @demo="demo" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二方式使用ref)-->
    <Student ref="student" />
  </div>
</template>

<script type="text/javascript">
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "你好呀！",
      studentName: '',
    }
  },
  components: {
    Student,
    School,
  },
  methods: {
    getSchoolName(SchoolName) {
      console.log("App组件收到了子组件school传递的数据学校名称:", SchoolName);
    },
    // getStudentName(stuName,...a){
    //   console.log("App组件收到了子组件student传递的数据学生姓名:",stuName,a);
    //   this.studentName = stuName;
    // },
    demo(){
      console.log("demo事件被触发了");
    }
  },
  // mounted() {
  //     this.$refs.student.$on("atguigu",function(stuName,...a){
  //        console.log("App组件收到了子组件student传递的数据学生姓名:",stuName,a);
  //        console.log(this); //该this是组件student的实例对象
  //       //  this.studentName = stuName;
  //     });
  //   },
    mounted() {
      this.$refs.student.$on("atguigu",(stuName,...a)=>{
         console.log("App组件收到了子组件student传递的数据学生姓名:",stuName,a);
         console.log(this); //该this是组件student的实例对象
         this.studentName = stuName;
        
      });
    },
};
</script>

<style lang="less" scoped>
</style>
