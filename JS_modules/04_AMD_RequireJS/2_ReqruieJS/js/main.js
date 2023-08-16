// 引入模块
(function () {
    requirejs.config({
        baseUrl: 'js/', //基本路径
        //配置路径
        paths: {
            dataService: './modules/dataService',//自定义库
            alerter: './modules/alerter',//自定义库
            jquery: './libs/jquery-1.8.0' //添加第三方库
        }
    });
    requirejs(['alerter'], function (alerts) {
        alerts.showName();
    });
})();

