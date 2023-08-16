<template>
  <ul>
     <!-- <li>接收消息: {{$route.query.id}}</li>
     <li>接收消息:{{$route.query.title}}</li> -->
     <li>接收消息:{{id}}</li>
     <li>接收消息:{{title}}</li>
  </ul>

</template>

<script>
    export default {
        name:"Detail",
        props:['id','title']
    }
</script>

<style>

</style>