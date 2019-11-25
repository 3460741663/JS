function greeter(person: string) :Function {
  // return 'hello,' + person
  return function abc(person: string){}
}
const user = 'wn'
greeter(user)
// string number boolean null undefined symbol void bigint

const isLoading = false;
const a: number = 6;
const b: number = 0xf00d;
const book: string = 'ts'
function warnUser():void {
  alert('test')
}
const c:void = undefined
let u: undefined = undefined
let n: null = null
// const sym1 = Symbol('key1');
// const sym2 = Symbol('key2');
// sym1 === sym2 // false

// any
// unknow //跟any一样，但是unknow更加严格
// nerver
// object

// let nosure: any = 4
// nosure.foo.bar = 1

// let value: unknown = 4
// value.foo.bar = 1
// value()
// new value()
// value[0][1]

const empty: never[] = [];
// empty.push(1);

const list1: Array<number> = [1, 2, 3] // 泛型
const list2: number[] = [1, 2, 3]

// 元组
let x: [string, number]
x = ['hello', 10]
let y: [string, number, boolean]
y = ["sfjldk", 1223, true]

// object
// enum Direction {
//   Center = 1
// }
let value: object

// value = Direction
value = [1]
value = [1, 'hello']

// 枚举
enum Direction {
  up = 'up', 
  down = 'down',
  left = 'left',
  right = 'right'
}
console.log(Direction['right'], Direction.up)

// 接口 interface
interface User {
  name: string
  age?: number
  readonly isMale: boolean
  say: (word: string) => string
}
const getUserName = (user:User) => user.name
// user.say = function(words: string){

// }

interface Config{
  width?: number
  [propName: string]: any // 添加字符串索引签名
}

function CalculateAreas(config: Config): {area: number}{
  let square = 100
  if (config.width){
    square = config.width * config.width
  }
  return {area: square}
}

let mySquare = CalculateAreas({width: 5});
console.log(mySquare);

// 类型断言
let mySquare1 = CalculateAreas({widdth:5} as Config)
// 添加字符串索引签名


// 抽象类 class
abstract class Animal {
  abstract makeSound():void
  move():void{
    console.log('ao ao ao ao')
  }
}

// 实例化抽象类需要创建子类来继承基类，实现抽象方法，就可以实例化子类
class Cat extends Animal {
  makeSound() {
    console.log('miao miao miao');
  }
}
const cat = new Cat()
cat.makeSound()
cat.move()