
//引入express模块
const  express = require('express');

//创建对象
const app = express();

//jquery发送ajax请求
app.all('/get/jquery',(request,response)=>{
    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    // response.send("hello get  jquery  我来了！！");
    const data = {name: '阿里巴巴'};
    response.send(JSON.stringify(data));
});
//axios发送ajax请求
app.all('/get/axios',(request,response)=>{
    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    // response.send("hello get  jquery  我来了！！");
    const data = {name: '阿里巴巴'};
    response.send(JSON.stringify(data));
});


//fetch函数发送ajax请求
app.all('/fetch',(request,response)=>{
    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // response.send("hello get  jquery  我来了！！");
    const data = {name: '阿里巴巴'};
    response.send(JSON.stringify(data));
});
//监听端口
app.listen(5000,()=>{
    console.log("服务已经在5000端口运行中.........");
});