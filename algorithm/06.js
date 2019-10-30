function minNumberInRotateArray(rotateArray)
{
    // write code here
    if (!rotateArray.length) return 0;
    let x = 0, y = rotateArray.length - 1;
    let temp = Math.floor((x + y) / 2);
    while ((y- x) > 1) {
      // console.log(x, y, temp);
      if (rotateArray[temp] < rotateArray[y]) y = temp;
      else x = temp
      temp = Math.floor((x + y) / 2);
    };
    if (rotateArray[x] > rotateArray[y]) return rotateArray[y]; 
    return rotateArray[x];
}
let arr = [4, 5, 6, 7, 8, 0, 2, 3, 4, 5];
console.log("+++");
console.log(minNumberInRotateArray(arr));
