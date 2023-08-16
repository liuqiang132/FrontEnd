//统一暴露
function func1() {
    console.log('func1() module2');
}
function func2() {
    console.log('func2() module2');
}

export {
    func1,
    func2
}