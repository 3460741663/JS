function jumpFloorII(number)
{
    // write code here
    // 即前n项和 + 1
    return Math.pow(2,number - 1);
}
console.log(jumpFloorII(3));