<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽  -->
      <slot>如果没有写插槽内容,则显示文件我</slot>
  </div>
</template>
<script>
    export default {
        name:"Category",
        props:["listData","title"]    
    };
</script>

<style lang="css" scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    video{
        width: 100%;
    }

</style>