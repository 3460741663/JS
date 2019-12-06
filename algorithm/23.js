function VerifySquenceOfBST(sequence)
{
  // write code here
  // 
}
// 数组最后一项为根节点，左子树所有节点小于根节点， 右子树有所有节点大于根节点递归
function trace(sequence, val){
  for(let i = sequence.length - 1; i >= 0; i --){
    if(sequence[i] < val){
      trace(sequence[0, i-1], sequence[i])
    }
  }
}