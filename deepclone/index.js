// 简单类型的值拷贝是拷贝值

let a = 1;//类型由它的值决定的
let b = a;

b = 2 ;
console.log(a);
//复杂数据类型，拷贝是引用式赋值
let obj = {
    a : 1
};
//基本深拷贝
//返回新的对象
obj2 = JSON.parse(JSON.stringify(obj));//二线公司
obj2.a = 2;
// 浅拷贝
console.log(obj.a); //创业公司
// 数组之中有什么操作，返回新数组的

//复杂问题
let OBJ = {
    a : 1,
    b : function(){
        console.log('bbb');;
    }
};
OBJ2 = JSON.parse(JSON.stringify(OBJ));
console.log(OBJ2);//stringify不处理函数
