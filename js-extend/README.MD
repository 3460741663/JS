## 继承
1. 面向对象组合代码的形式
2. 把超类 属性（构造函数）， 方法（prototyoe)
3. 弊端
  Child.prototype = new Go();
  var child1 = new Child();
  var child2 = new Child();
  child1.__proto__ = child2.__proto__
## new的机制
1. 先构造一个对象
2. 处理一下属性 prototype
3. 返回这个对象