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
//内存溢出
console.log(step(99));

