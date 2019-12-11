/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
  // 初始化结果
  let item = [];
  let result = [];
  findPath(root, expectNumber, item, result);
  return result;
}
function findPath(root, expectNumber, item, result){
  if(!root) return;
  // 刚好等于整数且为根节点
  if(root.val === expectNumber && !root.right && !root.left) {
    item.push(root.val);
    result.unshift(item); // 保存如结果数组
  }
  if(root.val < expectNumber){
    item.push(root.val)
    root.right && findPath(root.right, expectNumber - root.val, item.slice(0, item.length), result);
    root.left && findPath(root.left, expectNumber - root.val, item.slice(0, item.length), result);
  }
}
var tree ={
  val: 2,
  left: {
    val: 4,
    left: {
      val: 1
    },
    right: {
      val: 7
    }
  },
  right: {
    val: 11
  }
}
console.log(FindPath(tree, 13))

