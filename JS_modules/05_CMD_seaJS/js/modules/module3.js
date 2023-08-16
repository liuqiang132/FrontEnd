
define(function (require,exports,module) {
    let data = 'module3.js';
    function func() {
        console.log(data);
    }
      //暴露出去
    exports.module3 = {func};
});