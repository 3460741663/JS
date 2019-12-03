/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 遍历一棵树，把左子树和右子树互换
function preTrace(head){
  let result = [];
  let stack = [];
  stack.push(head);
  while(stack.length){
    // console.log(stack.length);
    let temp = stack.pop();
    if(temp){
      // result.push(temp.val);
      // 互换左右子树
      let tempChild = temp.right;
      temp.right = temp.left;
      temp.left = tempChild;

      temp.right && stack.push(temp.right)
      temp.left && stack.push(temp.left)
    }
  }
  return result;
}
function Mirror(head)
{
  let result = [];
  let stack = [];
  stack.push(head);
  while(stack.length){
    // console.log(stack.length);
    let temp = stack.pop();
    if(temp){
      // result.push(temp.val);
      // 互换左右子树
      let tempChild = temp.right;
      temp.right = temp.left;
      temp.left = tempChild;

      temp.right && stack.push(temp.right)
      temp.left && stack.push(temp.left)
    }
  }
  return result;
}
module.exports = {
    Mirror : Mirror
};