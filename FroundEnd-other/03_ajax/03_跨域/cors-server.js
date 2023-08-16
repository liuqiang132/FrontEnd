//引入express模块
const express = require('express');
//创建app对象
const app = express();

//同源策略测试
app.get("/home",(req, res) => {
    // res.send("hello cors 我需要实现跨越啦！！！");
    //响应一个页面
    res.sendFile("/data", __dirname+"/01_同源策略.html");

});
app.get("/data",(req, res) => {
    res.send("已经获取到用户的数据！！！");
});
//端口监听
app.listen(3000,()=>{
    console.log("服务已经在3000端口运行中.......");
});