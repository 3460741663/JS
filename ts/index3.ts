// // 
// // const person = {}
// // person.name = 'xiaomuzhu' // 报错

// interface Person{
//   name: string
//   age: number
// }
// // 断言写法
// // const person = {} as Person
// // person.name = 'xiaomuzhu'
// const person: Person = {
//   name : 'xiaomuzhu',
//   age : 21
// }


// // 双重断言
// const person1 = 'abc' as any as Person

// // 类型守卫
// class Person{
//   name =  'wn'
//   age = 18
// }
// class Animal {
//   name = 'petty'
//   color = 'pink'
// }

// // in
// // 类型守卫
// function getSomething(arg: Person | Animal) {
//   if (arg instanceof Animal) {
//     console.log(arg.color);
//     console.log(arg.name);
//   }
//   if ('age' in arg) {
//     console.log(arg.age);
//     console.log(arg.name);
//   }
// }
// // 字面量类型守卫
// type Foo = {
//   kind: 'foo';
//   foo: number
// }
// type Bar = {
//   kind: 'bar'
//   bar: number
// }

// function doStuff(arg: Foo | Bar) {
//   if(arg.kind === 'foo') {
//     console.log(arg.foo)
//   }else {
//     console.log(arg.bar)
//   }
// }

