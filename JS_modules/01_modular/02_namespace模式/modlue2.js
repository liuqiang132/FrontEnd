
// 对象封装思想
let obj = {
    msg: "hello namespace",
    foo(){
        console.log("foo",this.msg);
    }
};