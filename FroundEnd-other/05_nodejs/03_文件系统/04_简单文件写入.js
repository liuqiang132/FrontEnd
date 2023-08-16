/*
 简单文件写入:
    fs.writeFile(file, data[, options], callback)
    fs.writeSync(fd, buffer[, offset[, length[, position]]])
 */

const  fs = require('fs');
fs.writeFile("hello3.txt","这是一个函数",function (err) {
    if (!err){
        console.log("写入成功！！！");
    }

});