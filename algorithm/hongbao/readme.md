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
