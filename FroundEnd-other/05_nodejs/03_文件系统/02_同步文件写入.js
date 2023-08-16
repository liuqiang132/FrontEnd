

//引入fs模块
const  fs = require('fs');
//打开文件
const fd = fs.openSync('hello.txt','w');
//向文件中写入数据
fs.writeSync(fd,'落霞与孤鹜齐飞，秋水共长天一色');
//关闭文件
fs.closeSync(fd);
