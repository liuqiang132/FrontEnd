//定义没有依赖的模块
define(function (require,exports,module) {
    let name = 'module2.js';
    function bar() {
        console.log(name);
    }
    //暴露出去
    module.exports = bar;

});