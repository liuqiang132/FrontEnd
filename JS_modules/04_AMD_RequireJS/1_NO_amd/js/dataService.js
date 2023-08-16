
// 没有模块化之前
(function(window){
    let name = 'module1 alerter';
    function getName(){
        return name;
    }
    window.dataService = {getName};

})(window);