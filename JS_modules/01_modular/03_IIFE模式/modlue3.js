/**
 * 
 * 匿名函数自调用
 * 
 * 
 */
(function(window){
    let  msg = 'modlue3';
    function foo(){
       console.log('foo()',msg);
    }
    window.modlue3 = {foo};
})(window);