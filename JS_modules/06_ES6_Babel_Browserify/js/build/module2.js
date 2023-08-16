'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//统一暴露
function func1() {
    console.log('func1() module2');
}
function func2() {
    console.log('func2() module2');
}

exports.func1 = func1;
exports.func2 = func2;