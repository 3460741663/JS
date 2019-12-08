var { counter, obj, changeValue} = 
require('./export');

// 3  {}
console.log(counter, obj);
changeValue();
// 3 变了
console.log(counter, obj);
// 复制
// var a = 1; var b = a; a = 2;
// var aa = {}; var bb = aa; aa.name = 'bbname';
// commonJS require 的时候 类比 js 
// 基本数据类型 复杂数据类型 的复制,
// 它也就是 复制了一份导出来的东西
