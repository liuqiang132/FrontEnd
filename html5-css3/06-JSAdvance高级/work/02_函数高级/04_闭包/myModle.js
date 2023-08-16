function myFun() {
    //函数的局部变量
    var msg = "i love you !!!";
    function funSomeTing() {
        console.log("funSomeTing()"+msg.toLocaleUpperCase());
    }
    function funOtherTing() {
        console.log("funOtherTing()"+msg.toLocaleLowerCase());
    }
    //向外暴露对象,返回即可
    return {
        funSomeTing: funSomeTing,
        funOtherTing: funOtherTing
    }

}