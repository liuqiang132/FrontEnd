<template>
  <div id="demo1">
    <img src="./assets/logo.png" alt="Vue LOG">
    <School></School>
    <Student></Student>
  </div>
</template>

<script type="text/javascript">
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: "App",
  components: {
      School,
      Student,
    
  }
}
</script>

<style  scoped>
#demo1{
   background-color: green;
}


</style>
