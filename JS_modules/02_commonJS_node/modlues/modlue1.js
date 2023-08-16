// modlue.exports = value  暴露出去一个对象
module.exports = {
     msg: 'module1',
     foo(){
         console.log("foo()",this.msg);
     }
}
