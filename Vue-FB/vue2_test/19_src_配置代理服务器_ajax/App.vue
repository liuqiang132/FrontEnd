<template>
  <div>
    <!-- 获取学生信息 -->
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取学汽车信息</button>
  </div>
</template>
<script type="text/javascript">
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/atguigu/students").then(
        (response) => {
          console.log("请求学生信息成功了", response.data);
        },
        (error) => {
          console.log("请求学生信息失败了", error);
        }
      );
    },
    getCars(){
      axios.get("http://localhost:8080/api/cars").then(
        (response) => {
          console.log("请求汽车信息成功了", response.data);
        },
        (error) => {
          console.log("请求失汽车信息败了", error);
        }
      );
    }
    
  },
};
</script>

