/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let res = new Array(nums.length).fill(0);
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j ++){
      if(nums[i]>nums[j]) res[i]++;
    }
  }
  return res;
};
console.log(smallerNumbersThanCurrent([]))