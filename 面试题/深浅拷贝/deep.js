// let a = {
//   name: 'bbg',
//   book: {
//     title: "You don't know Js",
//     price: '45'
//   }
// }
// let a = [0, '1', [2, 3]]
// let b = JSON.parse(JSON.stringify(a.slice(1))); // 基础实现方式
// // 忽略undefined symbol,不能处理正则、date
// a[1] = '22';
// a[2][0] = 4;
// console.log(b);

// 手写深拷贝
function cloneDeep(source) {
  var target = {};
  for (var key in source) {
    if(Object.prototype.hasOwnProperty.call(source, key)){
      if (typeof source[key] == 'object'){
        target[key] = cloneDeep(source[key]);
      } else{
        target[key] = source[key];
      }    
    }
  }
  return target;
}
// let a = {
//   name: 'bbg',
//   book: {
//     title: "You don't know Js",
//     price: '45'
//   }
// }
// let b = cloneDeep(a);
// a.name = 'ddg';
// a.book.price = 4;
// console.log(b);
// console.log(a);
// 优化版
function cloneDeep1 (source) {
  if(typeof source !== 'object') return source;
  var target = Array.isArray(source) ? [] : {};
  for (var key in source) {
    if(Object.prototype.hasOwnProperty.call(source, key)){
      if (typeof source[key] == 'object'){
        target[key] = cloneDeep(source[key]);
      } else{
        target[key] = source[key];
      }    
    }
  }
  return target;
}
// let c = [0, '1', [2, 3]];
// let d = cloneDeep1(c);
// c[1] = '22';
// c[2][0] = 4;
// let c = null;
// let d = cloneDeep1(c);
// d = c;
// console.log(d);

// 使用栈实现深拷贝
function cloneDeep2 (x) {
  const root = {};
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]
  while (loopList.length) {
    // 广度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;
    // 初始化赋值目标,key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    for(let k in data){
      if (data.hasOwnProperty(k)){
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}
let a = {
  name: 'bbg',
  book: {
    title: "You don't know Js",
    price: '45'
  }
}
let b = cloneDeep2(a);
a.name = 'ddg';
a.book.price = 4;
console.log(b);
console.log(a);
