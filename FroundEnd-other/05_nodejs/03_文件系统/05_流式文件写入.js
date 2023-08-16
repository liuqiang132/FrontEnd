
const fs = require('fs');
//创建文件流
const ws = fs.createWriteStream("test.txt");

//向文件中写入内容
ws.write("通过write向文件中写入");
ws.write("通过write向文件中写入");
ws.write("通过write向文件中写入");
ws.write("通过write向文件中写入");

//关闭文件
ws.end();