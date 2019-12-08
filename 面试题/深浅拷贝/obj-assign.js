// 对引用数据类型浅拷贝，基础数据类型深拷贝
if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict';
      if (target == null || target == undefined) {
        throw new TypeError('Connot convert undefinded or null to object')
      }

      var to = Object(target)
      for(var index = 1; index < arguments.length; index ++){
        var nextSource = arguments[index]

        if (nextSource !== null) {
          // for(var nextKey in nextSource) {
          //   if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)){
          //     to[nextKey] = nextSource[nextKey]
          //   }
          // }
          for(var nextKey of Object.getOwnPropertyNames(nextSource)){
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    },
    writeable: true,
    configurable: true
  })
}
let a = {
  name: 'dasd',
  age: '18'
}
let b = {
  name: 'wwww',
  book: {
    title: "You don't know Js",
    price: '45'
  }
}
let c = Object.assign({}, {}, a, b)
console.log(c);