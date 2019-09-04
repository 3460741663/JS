## 递归
    常见的算法
        大的问题可以分成很多小的问题（相同或相似的）来组成
        - 问题可分解

## 递归优化
    - 去重复计算 7 = 6 + 5 
    计算过的缓存一下 {key:val} ES6中 Map() HashMap 
    const w = new Map(); // 缓存数据结构 Hash表
    function step(n){
        if(n == 1){
            return 1;
        }else if(n == 2){
            return 2;
        }else if (w.has(n)){
            return w.get(n);
        }
        var ret = step(n-1) + step(n-2);
        w.set(n,ret);
        return ret;
    }
    -每次调用函数 入栈 不优化，内存优化溢出
