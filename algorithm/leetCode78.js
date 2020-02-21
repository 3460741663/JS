/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let list = [];
  backTrack(nums, list);
  return list;
};
var backTrack = function(nums, res, templist=[], start=0){
  res.push([...templist])
  for(let i = start; i < nums.length; i ++){
    let num = nums[i];
    templist.push(num);
    backTrack(nums, res, templist, i + 1);
    templist.pop();
  }
}