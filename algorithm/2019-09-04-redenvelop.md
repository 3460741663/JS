## 红包算法
运算
- 法的总金额等于收的总金额，不能多，不能少
- 每个人至少要一分钱
- 保证每个人抢到的几率相等

产生15个随机数之和等于总金额
- 数组存
    均值为剩余金额的平均值
    function hongbao(total,num){
        const arr = [];
        let restAmount = total;//剩余金额
        let restNum = num;//剩余人数
        for(var i = 0; i < num - 1; i++){
            let temp = parseFloat(Math.random()*(restAmount/restNum)*2).toFixed(2);
            restAmount -= temp;
            restNum--;
            arr.push(temp);
        }
        arr.push(restAmount.toFixed(2));
        return arr;
    }
    console.log(hongbao(100,10));

## 递归算法
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
    