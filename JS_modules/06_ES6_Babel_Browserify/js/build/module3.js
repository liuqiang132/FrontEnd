'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

//默认暴露,可以暴露任何数据类型,暴露声明数据类型接受到的就是什么数据类型
exports.default = function () {
    console.log('我是默认暴露中的箭头函数');
};

//export default 只能写一次，重复写则会报错
// export default {
//     msg: 'hello word',
//     func(){
//         console.log(this.msg);
//     }
//
// };