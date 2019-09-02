#deepclone
    内部有性能优化的考点

- 为什么所有公司都考这道题
    - 性能优化
        1. chrome 自带的性能优化工具
        console.warn console.error() 
        console.time('for-in') console.timeEnd('for-in')
        顺序执行 顺序执行
        2. for key in 性能不太好 用for 代替，while最快
    - 浅拷贝 返回对象，并不是独立的新的的对象，跟直观理解有差异
    - 浅拷贝 变成深拷贝 规避内存指向同一地址的问题
        要不要返回新对象 JSON.parse(JSON.stringify())
    - JSON.parse(JSON.stringify())
    会返回一个对象，复杂的，如fanctuin(){}不进行处理，只能解决大部分问题
    - 递归，简单方式完整解决深拷贝
        大的问题，由多个 类似(clone)问题构造，并且有一个推出条件，clone 多层嵌套，由内到外的一层层解决
        一层时，直接返回
