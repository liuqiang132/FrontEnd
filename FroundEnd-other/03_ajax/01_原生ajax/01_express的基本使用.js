
//导入express 模块
const express = require('express');

//创建应用对象
const  app = express();

//添加路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get("/",(request,response)=>{
    response.send("hello express");

});

//监听端口响应服务
app.listen(8000,()=>{
    console.log("服务已经启动,8000端口监听中......");
});