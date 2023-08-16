
//自调用函数
(function () {
    var msg = "i love you !!!";
    function fun1() {
        console.log("fun1()"+msg.toLocaleUpperCase());
    }
    function fun2() {
        console.log("fun2()"+msg.toLocaleLowerCase());
    }
    //向外暴露对象，返回获取即可!!!!
    window.fun = {
        fun1: fun1,
        fun2: fun2
    }
})();