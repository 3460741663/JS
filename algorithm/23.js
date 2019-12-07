function VerifySquenceOfBST(sequence)
{
  if(sequence.length > 0){
    return trace(sequence.slice(0, -1), sequence[sequence.length -1])
  }
  return false
}
// 数组最后一项为根节点，左子树所有节点小于根节点， 右子树有所有节点大于根节点递归
function trace(sequence, val){
  // console.log(sequence, val)
  let flag = false;
  let temp = -1;
  if(sequence.length <= 1) return true
  for(let i = sequence.length -1; i >= 0; i --){
    // console.log(sequence[i] + '__')
    if(sequence[i] < val){
      flag = true
      temp = i
    }
    if(flag && sequence[i] > val){
      return false
    }
  }
  let l = trace(sequence.slice(0, temp - 1), sequence[temp]);
  let r = trace(sequence.slice(temp + 1,sequence.length - 2), sequence[sequence.length - 1])
  return l && r
}
let a = [2, 5, 3, 6, 8, 11, 9, 17, 14, 7]
// console.log(a.slice(0, -1));
console.log(VerifySquenceOfBST(a));