/*
 IIFE模式增强: 引入依赖这就是现代模块化实现的基石
*/

(function(window,$){
 let msg = 'modlue4';
 function foo(){
     console.log('foo()',msg);
 }

 window.module4 = foo;

 $('body').css({backgroundColor: 'red'});
})(window,jQuery);