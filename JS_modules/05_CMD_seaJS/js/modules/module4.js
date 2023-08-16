
define(function (require,exports,module) {
    let msg = 'module4.js';
     //同步引入module2.js
    let module2 = require('./module2');
    module2();
    //异步引入module3.js
    require.async('./module3',function (module3) {
        module3.module3.func();
    });
      function func2() {
          console.log(msg);
      }
      exports.func2 = func2;

})