function jumpFloor(number)
{
    // write code here
    if(number === 1 ) return 1
    if(number === 2 ) return 2
    else{
      let a1 = 1,a2 = 2,an
      for(let i = 3; i <= number; i++){
        an = a1 + a2;
        a1 = a2;
        a2 = an;
      }
      return an;
    }
}
console.log(jumpFloor(4));