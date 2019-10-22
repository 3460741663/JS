# 预编译 四部曲 发生在函数执行之前
1. 创建AO对象
2. 找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
3. 将实参值和形参值统一
4. 在函数体里找函数声明，将函数声明作为AO对象属性名，值赋予函数体
function fn(a) {
  console.log(a);
  var a = 123;
  consoled.log(a);
  function a() {};
  var b = function() {};
  console.
}