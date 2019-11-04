function Person(name) {
  this.name = name;
  return {a:1}
}
// let p = new Person();
// console.log(p.__proto__);
// console.log(Person.prototype)
// console.log(Person.__proto__)
// console.log(Function.prototype)
// console.log(Function.__proto__)
// console.log(Function.__proto__ == Object.prototype)

// var foo = {}
// var foo = new Object();
// var F = function() {}

// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// let per = new Person('zsd')

// console.log(per);
// console.log(foo.b);
// console.log(F.b);

// Array.prototype.method = function() {}
// var myArray = [1, 2, 3, 4, 5, 6 ,7]
// myArray.name = 'woniu'
// for (let index in myArray) {
//   console.log(index)
// }



let gArr = [1, [2, 3], 4, 5, [6, 7,[3, 2, 8]]]
// let oArr = [1, 2, 3, 4, 5, 6, 7, 8]
//console.log(gArr.toString(gArr).split(','));
// 1. 递归实现

function toPlain(arr){
  let orr = [];
  for (let index of arr) {
    if(Array.isArray(index))
    {
      orr = orr.concat(toPlain(index))
    }
    else orr.push(index)
  }
  return orr;
}

function outArr(arr) {
  return arr.reduce(function (pre, item){
    return pre.concat(Array.isArray(item) ? outArr(item) : item)
  },[])
}


console.log(toPlain(gArr));

// 2. 变成字符串
console.log(gArr.toString().split(',').map(item => Number(item)));
// console.log(gArr.toString)

// 3. 
console.log([].concat(...[1, 2, 3, [4, 5]]));

