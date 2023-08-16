
/*
 简单文件读取
      readFile("hello.txt",function (err,data);




 */
const  fs = require('fs');
fs.readFile("hello.txt",function (err,data) {
    if (!err){
        console.log(data.toString());
    }

});


