//引入fs模块
const fs = require("fs");

//调用方法获取读取文件
// fs.readFile('./resoures/滕王阁序.md',function(err,data){
//     //如果失败，抛出异常
//     if(err) throw error;

//     //成功返回数据
//     console.log(data.toString());


// });

//使用Promise封装
let p = new Promise((resolves,reject)=>{
    
    //调用方法获取读取文件
    fs.readFile('./resoures/滕王阁序.md',(err,data)=>{
        //失败返回
        if(err) reject(err);

        //成功返回
        resolves(data);

    });

});

p.then(function(value){
    //成功的状态
    console.log(value.toString());

},function(error){
    //失败的状态
    console.error("读取失败！！！");
});
