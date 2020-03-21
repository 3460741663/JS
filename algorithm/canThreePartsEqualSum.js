var canThreePartsEqualSum = function(A) {
  let sum = A.reduce((a,b)=>a+b)
  let tempSum = 0;
  let count = 0;
  for(let i = 0; i < A.length - 1; i ++){
    tempSum += A[i];
    if(tempSum == sum / 3){
      tempSum = 0;
      count ++;
      if(count == 2){
        return true;
      }
    }
  }
  return false
};
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]))