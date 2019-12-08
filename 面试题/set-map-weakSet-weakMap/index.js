// let gArr = [1, [2, 3], 4, 5, [6, 7,[3, 2, 8]]]
// console.log(Array.from(new Set(gArr.toString().split(',').map(item => Number(item)))));

// const s = new Set();
// [1, 2, 3, 4, 5, 3, 2, 1].forEach(x => s.add(x));
// console.log(s);

// let set = new Set([1, 2, 3, 2, 1])
// console.log(set.size);

// let set = new Set();
// set.add(1);
// set.has(1);
// set.delete(1);

// keys() 包含集合中所有键的迭代器
// value() 包含集合中所有值的迭代器
// entries 包含Set对象中所有键值的迭代器
// forEach(callbackFn, thisArg)
let set = new Set([1, 2, 3]);

console.log(set.entries());
// for(let index  of set.entries()) {
//   // console.log(index)
//   console.log(set.entries())
// }
// set.forEach((key, value) => {
//   console.log(key,value)
// })

// set = new Set([...set].map(item => item * 2)) 
// set = new Set([...set].filter(item => (item >= 4)));
// console.log(...set);