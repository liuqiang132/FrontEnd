
//导入express 模块
const express = require('express');

//创建应用对象
const  app = express();

//添加路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装


//1.ajax发送get请求
app.get("/server/get",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    response.send("落霞与孤鹜齐飞，秋水共长天一色");

});

//2.ajax发送post请求
app.post("/server/post",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    response.send("落霞与孤鹜齐飞，秋水共长天一色 是post请求");


});


//3.发送json数据
app.all("/server/json",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');

    //创建对象
    const  person = {
        name: "liuqiang132",
        age: 26
    };
    //将对象转化为json
    let data = JSON.stringify(person);
    response.send(data);

});

//4.nodemon工具的使用
app.all("/server/nodemon",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');

    //创建对象
    const  person = {
        name: "liuqiang132",
        age: 26
    };
    //将对象转化为json
    let data = JSON.stringify(person);
    response.send(data);

});

//5.解决IE缓存问题
app.all("/server/ie",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    response.send("hello ie ajax");

});
//5.延时响应
app.all("/server/excption",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    setTimeout(()=>{
        response.send("延时响应");
    },3000);
});

//6.取消请求
app.all("/server/qx",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    response.send("取消请求");
});
//7.请求重复发送问题
app.all("/server/cf",(request,response)=>{

    //解决ajax跨域的问题
    response.setHeader("Access-Control-Allow-Origin",'*');
    response.send("请求重复发送问题");
});



//监听端口响应服务
app.listen(8848,()=>{
    console.log("服务已经启动,8848端口监听中......");

});