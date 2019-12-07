/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
  // write code here
}
// 先序遍历
function preTrace(head){
  let result = [];
  let stack = [];
  stack.push(head);
  while(stack.length){
    // console.log(stack.length);
    let temp = stack.pop();
    if(temp){
      result.push(temp.val);
      temp.right && stack.push(temp.right)
      temp.left && stack.push(temp.left)
    }
  }
  return result;
}
var tree ={
  val: 2,
  left: {
    val: 4,
    left: {
      val: 0
    },
    right: {
      val: 7
    }
  },
  right: {
    val: 5
  }
}