//导入fs模块
const fs = require('fs');

//封装函数---出师表
function reaChuShiBiao(){
    //直接返回promise对象
    return new Promise((reslove,reject)=>{
        //读取出师表文件内容
        fs.readFile('./resoures/出师表.md',(err,data)=>{
            //判断是否成功
            if(err) reject(err);
            //成功
            reslove(data);
        });

    });
};
//封装函数---观刈麦
function reaGuanYiMain(){
    //直接返回promise对象
    return new Promise((reslove,reject)=>{
        //读取出师表文件内容
        fs.readFile('./resoures/观刈麦.md',(err,data)=>{
            //判断是否成功
            if(err) reject(err);
            //成功
            reslove(data);
        });

    });
};
//封装函数---滕王阁序
function reaTengWangGeXu(){
    //直接返回promise对象
    return new Promise((reslove,reject)=>{
        //读取出师表文件内容
        fs.readFile('./resoures/滕王阁序.md',(err,data)=>{
            //判断是否成功
            if(err) reject(err);
            //成功
            reslove(data);
        });

    });
};


//声明async函数
async function main(){

    //这就是await函数的高明之处
    let ChuShiBiao = await reaChuShiBiao();
    let GuanYiMain = await reaGuanYiMain();
    let TengWangGeXu = await reaTengWangGeXu();

    console.log(ChuShiBiao.toString());
    console.log(GuanYiMain.toString());
    console.log(TengWangGeXu.toString());
};

main();
