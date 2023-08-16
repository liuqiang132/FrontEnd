// 定义一个有依赖模块的函数

define(['dataService','jquery'],function(dataService,$){
    let name = 'alerter.js';
    function showName() {
        console.log(name, dataService.getMsg());
    }
    $('body').css({backgroundColor: "pink"});
    // 暴露模块
    return {showName};
});