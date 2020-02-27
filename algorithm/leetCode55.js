/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for(let i =0; i < nums.length; i ++){
    if(i > max) return false
    let iEnd = nums[i] + i;
    max = Math.max(iEnd, max);
    if(max >= nums.length) break;
  }
  return true;
};