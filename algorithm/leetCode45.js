var jump = function(nums) {
  let ans = 0;
  let begin = 0;
  let end = 1;
  while(end < nums.length){
    let temp = 0;
    for(let i = begin; i < end; i ++){
      temp = Math.max(temp, nums[i] + i)
    }
    begin = end;
    end = temp + 1;
    ans ++;
  }
  return ans;
}
console.log(jump([2,3,1,4,1,3,5]))