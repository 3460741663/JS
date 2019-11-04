// 减少重复判断 第一次判断时直接重写函数
// var foo = function () {
//   var t = new Date()
//   foo = function() {
//     return t
//   }
//   return foo()
// }

// 判断浏览器类型
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false)
  } else if(window.attachEvent) {
    el.attachEvent('on' + type, fn)
  }
}

// 判断浏览器类型的惰性函数写法
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function (type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent = function(type, el, fn) {
      el.attachEvent('on' + type, fn)
    }
  }
}