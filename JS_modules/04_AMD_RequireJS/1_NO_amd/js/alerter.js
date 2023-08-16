// 定义一个有模块的函数
(function(window,dataService){
    let msg = 'dataService.js';
    function show(){
        console.log(msg,dataService.getName());
    }
    window.alerter = {show};
})(window,dataService);