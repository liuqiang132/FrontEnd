// 汇集各个模块集中管理
// 引入第三方库uniq
const uniq = require('uniq');


const modlue1 = require("./modlues/modlue1");
const module2 = require('./modlues/modlue2');
const module3 = require('./modlues/modlue3');
// 测试一
modlue1.foo();

// 测试二
module2();

// 测试三
module3.foo();
module3.bar();

// 测试uniq,该方法功能: 对数组中的重复数据进行去重
 const  newArray  =  uniq(module3.array);
 console.log(newArray);
