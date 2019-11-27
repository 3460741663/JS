const add = (a: number, b: number) :number => a + b
console.log(add(1, 2))

const add1 = (a: number, b ?: number) => a + (b ? b : 0)

// 剩余参数
const add2 = (a: number,...rest:number[]) => rest.reduce((a, b)=> a + b)
console.log(add2(1, 2, 3));



// // 重载
// interface Direction{
//   top: number,
//   right: number,
//   bottom: number,
//   left: number
// }

// function assigned(all: number): Direction
// function assigned(topAndButtom: number, leftAndRight: number):Direction
// function assigned(top: number, right: number, buttom: number, left: number): Direction
// function assigned(a: number, b?: number, c?:number, d?:number){
//   if(b === undefined && c === undefined && d === undefined){
//     b = c = d = a
//   }else if (c === undefined && d === undefined){
//     c = d = a 
//   }
//   return {
//     top: a,
//     reght: b,
//     bottom: c,
//     left: d
//   }
// }

// function returnItem <T> (para: T):T{
//   return para
// }

// function swap<T, U>(tuple: [T, U]): [U, T]{
//   return [tuple[1], tuple[0]];
// }

// // 泛型变量
// function getArrayLength<T>(arg: Array<T>):Array<T>{
//   console.log((arg as Array<any>).length);
//   return arg
// }

// 泛型接口
interface ReturnItemFn<T>{
  (para: T): T
}

const returnItem: ReturnItemFn<number> = para => para

// // 泛型类
// class Stack<T>{
//   private arr: T[] = []
//   public push(item: T) {
//     this.arr.push(item)
//   }
//   public pop(){
//     this.arr.pop()
//   }
// }

// 泛型约束
type Params = number | string
class Stack<T extends Params>{
  private arr: T[] = []
  public push(item: T) {
    this.arr.push(item)
  }
  public pop(){
    this.arr.pop()
  }
}
const stack1 = new Stack<string>()
// const stack2 = new Stack<boolean>()

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}
// class Demo<T extends FirstInterface, SecondInterface>{
  // private test: T
  // useT() {
  //   this.test.doSomething()
  //   this.test.doSomethingElse()
  // }
// }
// interface childInterface extends FirstInterface, SecondInterface{

// }
// class Demo <T extends childInterface> {
//   private test: T
//   useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

// new 
function factory<T>(type: {new ():T}): T {
  return new type()
}

