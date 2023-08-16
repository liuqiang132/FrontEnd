
//1.引入fs模块
const fs = require('fs');

//读取多个文件方式一:
fs.readFile('./resoures/出师表.md', (err, data1) => {

    fs.readFile('./resoures/滕王阁序.md', (err, data2) => {

        fs.readFile('./resoures/观刈麦.md', (err, data3) => {

            // let reslut = data1 + data2 + data3;

            console.log(data1 + "\r\n" + data2 + "\r\n" + data3);

        });

    });

});




//使用Promise实现方式二:

let p = new Promise((resolve, reject) => {

    fs.readFile("./resoures/出师表.md", (err, data) => {
        resolve(data);
    });
});

p.then((value) => {

    return new Promise((reslove, reject) => {

        fs.readFile("./resoures/滕王阁序.md", (err, data) => {

            //此时形成一个数组
            reslove([value, data]);
        });
    });
}).then((value) => {

    return new Promise((reslove, reject) => {

        fs.readFile("./resoures/观刈麦.md", (err, data) => {

            //此时的value ==== [value,data]是一个数组,则可执行此方法
            value.push(data);
            reslove(value);
        });
    });
}).then((value) => {

    console.log(value.toString());

});

