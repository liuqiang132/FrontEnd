// 定义没有模块的js
define(function () {
    let msg = 'dataService.js';
    function getMsg() {
        return msg;
    }
    // 暴露模块
    return {getMsg};
});