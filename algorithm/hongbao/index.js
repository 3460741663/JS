//total/num*2 抢的公平
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