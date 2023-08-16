"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//统一暴露

//引入模块module1 module2
(0, _jquery2.default)('body').css({ backgroundColor: "orange" }); //默认暴露

//引入第三方库 : jquery
//分别暴露


(0, _module.foo)();
(0, _module.bar)();

(0, _module2.func1)();
(0, _module2.func2)();

(0, _module4.default)();

// module3.func();