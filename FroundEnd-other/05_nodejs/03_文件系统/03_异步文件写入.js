

//引入fs模块
const  fs = require('fs');
fs.open('hello2.txt','w',function (err,fd) {

    if (!err){
       fs.write(fd,'写入异步数据文件中！！！',function (err) {
           if (!err){
               console.log("写入数据成功！！！");
           }
           //关闭文件
           fs.close(fd,function (err) {
               if (!err){
                   console.log("关闭成功！！！");
               }
           });
       });
    }else {
        console.log(err);
    }

});