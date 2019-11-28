// 装饰器(decorator)
// class Person {
//   say () {
//     console.log('hello')
//   }
// }

// // 类装饰器
// function addAge(construtor: Function){
//   construtor.prototype.age = 18
// }

// @addAge
// class Person {
//   name: string;
//   age?: number;
//   constructor(){
//     this.name = 'wn'
//   }
// }
// let person = new Person()
// console.log(person.age)

// 属性/方法 装饰器
// 声明装饰器修饰方法、 属性
// function method(target: any, propertKey:string, descriptor: PropertyDescriptor){
//   console.log(target)
//   console.log('prop' + propertKey)
//   console.log('desc' + JSON.stringify(descriptor) + '\n\n');
//   descriptor.writable = true;
// }

// class Person {
//   name: string
//   constructor () {
//     this.name = 'wn'
//   }
//   @method
//   say() {
//     return 'instance method'
//   }
//   @method
//   static run() {
//     return 'static method'
//   }
// }

// const abc = new Person()
// console.log(abc.say())
// console.log(abc.say())
// abc.say = function () {
//   return 'edit'
// }

// console.log(abc.say())

// 参数装饰器
function logParameter(target: Object, propertKey: string, index: number){
  console.log(target, propertKey, index)
}
class Person{
  @logParameter
  greet(message: string): string{
    return `${message} ${name}`
  }
}

const p = new Person()


