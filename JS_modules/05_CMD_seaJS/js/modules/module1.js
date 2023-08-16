/*
* 定义没有依赖的函数
*
* */
define(function (require,exports,module){
    let  msg = 'module1.js';
    function foo() {
        return msg;
    }
    //暴露出去
    module.exports = {foo};
});