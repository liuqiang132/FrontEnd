<template>
  <div class="school">
      <h1>学校名称: {{schoolName}}</h1>
      <h1>学校地址:{{schoolAddress}}</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "School",
  data() {
    return {
        schoolName: '尚硅谷',
        schoolAddress: "陕西西安"
    }
  },
}
</script>

<style lang="css" scoped>
 .school{
     background-color: orange;
 }
</style>
