


//文件的复制

const fs = require('fs');

const  rs = fs.createReadStream("hello.txt");

rs.once("open",function () {
    console.log("文件已经打开了");
});
rs.once('close',function () {
    console.log("文件已经关闭");
});

rs.on('data',function (data) {
    console.log(data);

});

