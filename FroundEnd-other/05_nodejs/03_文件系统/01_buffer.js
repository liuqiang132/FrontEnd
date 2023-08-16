

let  str = "liuqiang132";

let buf = Buffer.from(str);
console.log(buf);
console.log(buf.length);
console.log(str.length);


//分配空间
let buf1 = Buffer.alloc(10);
buf1[0] = 0xff;
console.log(buf1);

