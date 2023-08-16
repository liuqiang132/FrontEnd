
let a = 10;

// console.log(global.a,a);  //undefined


//封装实际参数
// console.log(arguments.callee.toString());


/*
函数原型:
function (exports, require, module, __filename, __dirname) {

let a = 10;

console.log(global.a,a);  //undefined


//封装实际参数
console.log(arguments.callee.toString());
}
 */


 
 /**
  * 实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个参数:
  * 
  * exports:  该对象用来将变量或者函数暴露到外部
  * require:  该函数,用来引入外部模块
  * module:   module代表的是当前模块本身，exports就是module的属性,既可以使用exports导出，也可以使用module.exports导出
  * __filename:  当前模块的完整路径: c:\Users\liuqiang132\Desktop\FrontEnd\第三阶段(其他高级技术)\05_nodejs\01_模块化\04_模块化详解.js
  * __dirname:   当前模块所在文件夹的完整路径: c:\Users\liuqiang132\Desktop\FrontEnd\第三阶段(其他高级技术)\05_nodejs\01_模块化
  * 
  * 
  * 
  **/
 console.log(exports);
 console.log(module.exports === exports);
 console.log(module.children);
 console.log(__filename);
 console.log(__dirname);
